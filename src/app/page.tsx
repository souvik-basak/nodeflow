import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import LandingPage from "./landing";
import PageClient from "./page-client";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return <LandingPage />;

  return <PageClient userInfo={session.user} />;
};

export default Page;
