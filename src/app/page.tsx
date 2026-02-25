import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth-utils";
import LandingPage from "./landing";
// import PageClient from "./page-client";

const Page = async () => {
  const session = await getSession();

  if (!session) return <LandingPage />;
  redirect("/workflows");

  // return <PageClient userInfo={session.user} />;
};

export default Page;
