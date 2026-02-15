"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must include at least one uppercase letter")
      .regex(/[a-z]/, "Password must include at least one lowercase letter")
      .regex(/[0-9]/, "Password must include at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must include at least one symbol"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

type ResetPasswordClient = {
  resetPassword?: (input: { newPassword: string; token?: string }) => Promise<{
    error?: { message: string };
  }>;
};

export function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isResetting, setIsResetting] = useState(false);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    if (!token) {
      toast.error("Reset link is invalid or expired.");
      return;
    }

    const resetClient = authClient as ResetPasswordClient;
    if (!resetClient.resetPassword) {
      toast.error("Password reset is not configured yet.");
      return;
    }

    try {
      setIsResetting(true);
      const result = await resetClient.resetPassword({
        token,
        newPassword: values.password,
      });

      if (result?.error) {
        toast.error(`Failed to reset password: ${result.error.message}`);
        return;
      }

      toast.success("Password updated. You can log in now.");
      router.push("/login");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Please try again later.";
      toast.error(`Failed to reset password: ${message}`);
    } finally {
      setIsResetting(false);
    }
  };

  const isPending = form.formState.isSubmitting || isResetting;
  const isTokenMissing = !token;

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Set a new password</CardTitle>
          <CardDescription>
            Choose a strong password to secure your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full gap-6"
            >
              <div className="grid gap-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your new password"
                          autoComplete="new-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm your new password"
                          autoComplete="new-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {isTokenMissing ? (
                  <div className="rounded-lg border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
                    This reset link is invalid or expired. Please request a new
                    reset link.
                  </div>
                ) : null}
                <Button
                  className="w-full"
                  type="submit"
                  disabled={isPending || isTokenMissing}
                >
                  {isPending ? "Updating password..." : "Update password"}
                </Button>
              </div>
              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  Remembered your password?{" "}
                </span>
                <Link
                  href="/login"
                  className="underline-offset-4 underline text-primary"
                >
                  Back to login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-center text-sm text-muted-foreground">
        By logging in, you agree to our{" "}
        <Link href="/terms" className="underline hover:text-foreground">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
