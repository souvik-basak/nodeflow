import { ChangePasswordForm } from "@/features/auth/components/forms/change-password-form";
import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();

  return <ChangePasswordForm />;
};

export default Page;
