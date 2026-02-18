import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/components/forms/login-form";
import { requireUnauth } from "@/lib/auth-utils";

export const metadata: Metadata = {
  title: "Log in",
};

const Page = async () => {
  await requireUnauth();

  return <LoginForm />;
};

export default Page;
