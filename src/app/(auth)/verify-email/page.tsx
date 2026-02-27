import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import VerifyEmailClient from "./verify-email-client";

type VerifyEmailPageProps = {
  searchParams?: Promise<{
    verifyUrl?: string;
  }>;
};

const VerifyEmailPage = async ({ searchParams }: VerifyEmailPageProps) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const params = await searchParams;

  if (session?.user?.emailVerified) {
    redirect("/?emailVerified=already");
  }

  return <VerifyEmailClient verifyUrl={params?.verifyUrl} />;
};

export default VerifyEmailPage;
