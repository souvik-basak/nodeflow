import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth-utils";
import Image from "next/image";
import Link from "next/link";

export default async function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8">
        <Link
          href="/"
          className="flex items-center gap-0 self-center font-medium"
        >
          <Image src="/logo2.svg" alt="NodeFlow" width={64} height={64} />
          <span className="text-lg font-semibold tracking-tight">NodeFlow</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a className="hover:text-foreground" href="#features">
            Features
          </a>
          <a className="hover:text-foreground" href="#workflow">
            Workflow
          </a>
          <a className="hover:text-foreground" href="#pricing">
            Pricing
          </a>
        </nav>
        {session ? (
          <div className="flex items-center gap-3">
            <Button asChild>
              <Link href="/workflows">Back to app</Link>
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              className="text-sm text-muted-foreground hover:text-foreground"
              href="/login"
            >
              Sign in
            </Link>
            <Button asChild>
              <Link href="/signup">Get started</Link>
            </Button>
          </div>
        )}
      </header>
      <main className="mx-auto w-full max-w-4xl px-6 py-10">{children}</main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© 2026 NodeFlow. All rights reserved.</span>
          <div className="flex gap-6">
            <Link className="hover:text-foreground" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-foreground" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-foreground" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
