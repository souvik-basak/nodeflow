import {
  BookOpenIcon,
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  SearchIcon,
  UsersIcon,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I create my first workflow?",
    answer:
      "Navigate to the Workflows page, click 'New Workflow', and use our drag-and-drop editor to add nodes. Connect them together, configure each node, and click 'Activate' to start automating. Check out our Getting Started guide in Documentation for a detailed walkthrough.",
  },
  {
    question: "What's the difference between credentials and API keys?",
    answer:
      "Credentials in NodeFlow are secure storage containers for authentication data (API keys, OAuth tokens, passwords). They're encrypted and reusable across multiple workflows. API keys are one type of credential—others include OAuth2 connections, basic auth, and custom authentication methods.",
  },
  {
    question: "How do I troubleshoot a failed execution?",
    answer:
      "Go to Executions, find the failed run, and click to view details. You'll see exactly which node failed, error messages, and input/output data for each step. Common issues include invalid credentials, API rate limits, or malformed data. Enable debug mode for more detailed logs.",
  },
  {
    question: "Can I schedule workflows to run automatically?",
    answer:
      "Yes! Use a Schedule Trigger node with cron expressions or simple intervals (every hour, daily, weekly). For complex schedules, our visual cron builder helps you set exact times and frequencies without writing expressions manually.",
  },
  {
    question: "How many workflows can I create on the free plan?",
    answer:
      "The free plan includes up to 5 active workflows and 1,000 executions per month. Inactive workflows don't count toward your limit. Upgrade to Pro for unlimited workflows, 50,000 executions/month, and advanced features like team collaboration and priority support.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All credentials are encrypted using AES-256-GCM at rest and in transit. Workflow executions run in isolated environments, and we never log sensitive data. We're SOC 2 Type II certified and GDPR compliant. Check our Security page for full details.",
  },
  {
    question: "Can I export and import workflows?",
    answer:
      "Yes, you can export any workflow as JSON from the workflow editor menu. Import workflows using the 'Import' button on the Workflows page. This is great for backing up workflows, sharing with teammates, or migrating between accounts.",
  },
  {
    question: "What happens if a workflow fails mid-execution?",
    answer:
      "Failed workflows can be automatically retried based on your configuration (up to 3 retries with exponential backoff). You'll receive notifications via email or webhook. Partial executions are saved, so you can review exactly where it failed and manually retry if needed.",
  },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Support Center</h1>
        <p className="text-muted-foreground text-lg">
          Get help from our team and community
        </p>
      </div>

      <Separator />

      {/* Search Bar */}
      <Card>
        <CardHeader>
          <CardTitle>Search Help Articles</CardTitle>
          <CardDescription>
            Find answers to common questions and issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search for help articles, guides, and tutorials..."
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Options */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <MessageCircleIcon className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Live Chat</CardTitle>
              <CardDescription>
                Get instant help from our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Start Chat
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Available Mon-Fri, 9am-6pm EST
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <MailIcon className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Email Support</CardTitle>
              <CardDescription>
                We&apos;ll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <a href="mailto:support@nodeflow.app">Send Email</a>
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                support@nodeflow.app
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <UsersIcon className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Community Forum</CardTitle>
              <CardDescription>
                Connect with other NodeFlow users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                5,000+ active members
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Premium Support */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Premium Support</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <PhoneIcon className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Priority Phone Support</CardTitle>
              <CardDescription>
                Direct access to senior support engineers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>30-minute response time SLA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>24/7 emergency support line</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Available on Enterprise plan</span>
                </li>
              </ul>
              <Button className="w-full mt-4" asChild>
                <Link href="/pricing">Upgrade to Enterprise</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <VideoIcon className="size-8 text-primary mb-2" />
              <CardTitle className="text-lg">Onboarding & Training</CardTitle>
              <CardDescription>
                Personalized setup and best practices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>1-on-1 video sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Custom workflow consulting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Team training workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Available as add-on to Pro plan</span>
                </li>
              </ul>
              <Button className="w-full mt-4" asChild>
                <Link href="/contact">Schedule Session</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* FAQ */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <BookOpenIcon className="size-6 text-primary" />
          <h2 className="text-2xl font-semibold">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Additional Resources */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>
            More ways to learn and get help
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/docs"
            className="text-sm font-medium text-primary hover:underline"
          >
            📚 Documentation →
          </Link>
          <Link
            href="/changelog"
            className="text-sm font-medium text-primary hover:underline"
          >
            📝 Changelog →
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            🎥 Video Tutorials →
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            💡 Template Library →
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            🔧 API Reference →
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            📊 Status Page →
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            🐛 Report a Bug →
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            💬 Feature Requests →
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
