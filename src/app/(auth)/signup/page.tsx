import type { Metadata } from "next";
import { RegisterForm } from "@/features/auth/components/forms/register-form";
import { requireUnauth } from "@/lib/auth-utils";

export const metadata: Metadata = {
  title: "Sign up",
};

const Page = async () => {
  await requireUnauth();
  return <RegisterForm />;
};

export default Page;
