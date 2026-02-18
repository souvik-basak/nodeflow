import type { Metadata } from "next";
import { ResetPasswordForm } from "@/features/auth/components/forms/reset-password-form";
import { requireUnauth } from "@/lib/auth-utils";

export const metadata: Metadata = {
  title: "Reset password",
};

const Page = async () => {
  await requireUnauth();

  return <ResetPasswordForm />;
};

export default Page;
