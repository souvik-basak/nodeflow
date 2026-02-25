import {
  BookOpenIcon,
  CodeIcon,
  PlayIcon,
  PlugIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-muted-foreground text-lg">
          Learn how to build, automate, and scale your workflows with NodeFlow
        </p>
      </div>

      <Separator />

      {/* Getting Started */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <PlayIcon className="size-6 text-primary" />
          <h2 className="text-2xl font-semibold">Getting Started</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Create Your First Workflow</CardTitle>
              <CardDescription>
                Build your first automation in under 5 minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="space-y-2">
                <p className="font-medium">1. Create a new workflow</p>
                <p className="text-muted-foreground pl-4">
                  Navigate to Workflows and click &quot;New Workflow&quot;
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">2. Add nodes</p>
                <p className="text-muted-foreground pl-4">
                  Drag and drop nodes from the sidebar to your canvas
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">3. Connect and configure</p>
                <p className="text-muted-foreground pl-4">
                  Link nodes together and set up your logic
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">4. Test and deploy</p>
                <p className="text-muted-foreground pl-4">
                  Run tests, then activate your workflow
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Concepts</CardTitle>
              <CardDescription>
                Understand the building blocks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Workflows</p>
                <p className="text-muted-foreground">
                  A sequence of connected nodes that automate tasks
                </p>
              </div>
              <div>
                <p className="font-medium">Nodes</p>
                <p className="text-muted-foreground">
                  Individual units of work (triggers, actions, conditions)
                </p>
              </div>
              <div>
                <p className="font-medium">Executions</p>
                <p className="text-muted-foreground">
                  Each time a workflow runs, creating logs and results
                </p>
              </div>
              <div>
                <p className="font-medium">Credentials</p>
                <p className="text-muted-foreground">
                  Secure storage for API keys and authentication tokens
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Core Features */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <ZapIcon className="size-6 text-primary" />
          <h2 className="text-2xl font-semibold">Core Features</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CodeIcon className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Visual Editor</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Build complex workflows with our intuitive drag-and-drop interface.
              No coding required, but JavaScript expressions are supported for
              advanced users.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <PlugIcon className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Integrations</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Connect to 500+ apps and services. From databases to APIs, CRMs to
              messaging platforms—automate everything in one place.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheckIcon className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Security & Reliability</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Enterprise-grade encryption, error handling, and automatic retries.
              Your workflows run on resilient infrastructure with 99.9% uptime.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Resources */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpenIcon className="size-6 text-primary" />
          <h2 className="text-2xl font-semibold">Resources</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tutorials & Guides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → How to use webhooks in NodeFlow
              </Link>
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → Handling errors and retries
              </Link>
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → Working with databases
              </Link>
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → Scheduling workflows with cron
              </Link>
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → Best practices for production workflows
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">API & SDK Reference</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → REST API Documentation
              </Link>
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → JavaScript SDK
              </Link>
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → Python SDK
              </Link>
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → Webhook Events Reference
              </Link>
              <Link
                href="#"
                className="block text-primary hover:underline"
              >
                → CLI Commands
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community & Support */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>
            Our community and support team are here to help you succeed
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4 flex-wrap">
          <Link
            href="/support"
            className="text-sm font-medium text-primary hover:underline"
          >
            Contact Support →
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            Join Discord Community →
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            Browse Templates →
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
