"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LogoutButton } from "./logout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type PageClientProps = { userInfo: unknown };

const PageClient = ({ userInfo }: PageClientProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasShownVerifiedToast = useRef(false);
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const testAi = useMutation(trpc.testAi.mutationOptions({
    onSuccess: () => toast.success("AI job queued successfully"),
    onError: () => toast.error("Failed to queue AI job"),
  }))

  const createWorkflow = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess() {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
        toast.success("Workflow created successfully");
      },
    }),
  );

  useEffect(() => {
    const emailVerified = searchParams.get("emailVerified");
    if (emailVerified !== "already" || hasShownVerifiedToast.current) {
      return;
    }

    hasShownVerifiedToast.current = true;
    toast.success("Email is already verified");

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("emailVerified");
    const nextQuery = nextParams.toString();
    const timeoutId = window.setTimeout(() => {
      router.replace(nextQuery ? `/?${nextQuery}` : "/");
    }, 150);

    return () => window.clearTimeout(timeoutId);
  }, [router, searchParams]);

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center gap-6 px-6">
      <div className="text-lg font-semibold">protected server content</div>
      <Button onClick={() => createWorkflow.mutate()}>Create Workflow</Button>
      <pre className="w-full max-w-4xl rounded-2xl border border-border bg-card p-6 text-xs text-muted-foreground">
        {JSON.stringify(data, null, 2)}
      </pre>
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>Test AI</Button>
      <pre className="w-full max-w-4xl rounded-2xl border border-border bg-card p-6 text-xs text-muted-foreground">
        {JSON.stringify(userInfo, null, 2)}
      </pre>
      <LogoutButton />
    </div>
  );
};

export default PageClient;
