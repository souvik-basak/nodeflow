import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/features/auth/components/forms/forgot-password-form";
import { requireUnauth } from "@/lib/auth-utils";

export const metadata: Metadata = {
  title: "Forgot password",
};

const Page = async () => {
  await requireUnauth();

  return <ForgotPasswordForm />;
};

export default Page;
