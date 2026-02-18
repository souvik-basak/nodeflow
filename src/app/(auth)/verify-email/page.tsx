import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

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

  const verifyUrl = params?.verifyUrl;

  if (!verifyUrl) {
    redirect("/login?verifyInvalid=1");
  }

  try {
    const decodedVerifyUrl = decodeURIComponent(verifyUrl);
    const response = await fetch(decodedVerifyUrl, {
      method: "GET",
      headers: await headers(),
    });

    if (!response.ok) {
      redirect("/login?verifyInvalid=1");
    }

    redirect("/login?verified=1");
  } catch {
    redirect("/login?verifyInvalid=1");
  }
};

export default VerifyEmailPage;
