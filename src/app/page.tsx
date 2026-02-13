import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";
import LandingPage from "./landing";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <LandingPage />;
  }

  const data = await caller.getUsers();

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center gap-6 px-6">
      <div className="text-lg font-semibold">protected server content</div>
      <pre className="w-full max-w-4xl rounded-2xl border border-border bg-card p-6 text-xs text-muted-foreground">
        {JSON.stringify(data, null, 2)}
      </pre>
      <LogoutButton />
    </div>
  );
};

export default Page;
