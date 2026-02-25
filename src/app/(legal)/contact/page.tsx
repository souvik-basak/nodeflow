"use client";

import { useState } from "react";
import {
  Building2Icon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(
      "Message sent successfully! We'll get back to you within 24 hours.",
    );
    setIsSubmitting(false);

    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Have a question? We&apos;re here to help. Reach out and we&apos;ll get
          back to you as soon as possible.
        </p>
      </div>

      <Separator />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and our team will respond within 24
                hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">
                    Company{" "}
                    <span className="text-muted-foreground text-xs">
                      (optional)
                    </span>
                  </Label>
                  <Input id="company" name="company" placeholder="Acme Inc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">
                    Subject <span className="text-destructive">*</span>
                  </Label>
                  <Select name="subject" required>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">
                        Billing & Payments
                      </SelectItem>
                      <SelectItem value="sales">
                        Sales & Partnerships
                      </SelectItem>
                      <SelectItem value="enterprise">
                        Enterprise Solutions
                      </SelectItem>
                      <SelectItem value="feedback">Product Feedback</SelectItem>
                      <SelectItem value="bug">Report a Bug</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Please provide as much detail as possible
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <SendIcon className="mr-2 size-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MailIcon className="size-5 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:support@nodeflow.app"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    support@nodeflow.app
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquareIcon className="size-5 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Live Chat</p>
                  <p className="text-sm text-muted-foreground">
                    Available 9am-6pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="size-5 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Phone (Enterprise)</p>
                  <p className="text-sm text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Office Location */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Office Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2Icon className="size-5 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Headquarters</p>
                  <p className="text-sm text-muted-foreground">
                    NodeFlow Technologies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="size-5 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">
                    Bengaluru, Karnataka
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="size-5 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Working Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri: 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Response Time</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">General inquiries</span>
                <span className="font-medium">24 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Technical support</span>
                <span className="font-medium">12 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Enterprise clients
                </span>
                <span className="font-medium">4 hours</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Help */}
      <Card>
        <CardHeader>
          <CardTitle>Looking for something else?</CardTitle>
          <CardDescription>
            Check out these resources for quick answers
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="/support"
            className="flex flex-col gap-1 p-3 rounded-lg border hover:bg-accent transition-colors"
          >
            <span className="font-medium text-sm">Support Center</span>
            <span className="text-xs text-muted-foreground">
              Get help and browse FAQs
            </span>
          </a>
          <a
            href="/docs"
            className="flex flex-col gap-1 p-3 rounded-lg border hover:bg-accent transition-colors"
          >
            <span className="font-medium text-sm">Documentation</span>
            <span className="text-xs text-muted-foreground">
              Learn how to use NodeFlow
            </span>
          </a>
          <a
            href="#"
            className="flex flex-col gap-1 p-3 rounded-lg border hover:bg-accent transition-colors"
          >
            <span className="font-medium text-sm">Community</span>
            <span className="text-xs text-muted-foreground">
              Join our Discord server
            </span>
          </a>
          <a
            href="#"
            className="flex flex-col gap-1 p-3 rounded-lg border hover:bg-accent transition-colors"
          >
            <span className="font-medium text-sm">Status Page</span>
            <span className="text-xs text-muted-foreground">
              Check system status
            </span>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
