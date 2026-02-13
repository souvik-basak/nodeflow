import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-primary shadow-md shadow-primary/30" />
          <Link className="text-lg font-semibold tracking-tight" href="/">
            NodeFlow
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link className="hover:text-foreground" href="/#features">
            Features
          </Link>
          <Link className="hover:text-foreground" href="/#workflow">
            Workflow
          </Link>
          <Link className="hover:text-foreground" href="/#pricing">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            className="text-sm text-muted-foreground hover:text-foreground"
            href="/login"
          >
            Sign in
          </Link>
          <Link
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            href="/signup"
          >
            Get started
          </Link>
        </div>
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
