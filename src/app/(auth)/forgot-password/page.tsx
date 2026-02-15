import { ForgotPasswordForm } from "@/features/auth/components/forms/forgot-password-form";
import { requireUnauth } from "@/lib/auth-utils";

const Page = async () => {
  await requireUnauth();

  return <ForgotPasswordForm />;
};

export default Page;
