import { ResetPasswordForm } from "@/features/auth/components/forms/reset-password-form";
import { requireUnauth } from "@/lib/auth-utils";

const Page = async () => {
  await requireUnauth();

  return <ResetPasswordForm />;
};

export default Page;
