"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Reorder,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaGithub, FaSlack } from "react-icons/fa";
import {
  SiAsana,
  SiAirtable,
  SiCalendly,
  SiDiscord,
  SiDropbox,
  SiFigma,
  SiGmail,
  SiGoogledrive,
  SiHubspot,
  SiJira,
  SiLinear,
  SiNotion,
  SiStripe,
  SiZendesk,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LandingPage = () => {
  // Local UI state for demo interactions (reorderable list)
  const [flowItems, setFlowItems] = useState([
    "Roadmap review",
    "Design handoff",
    "API integration",
    "Launch prep",
  ]);
  // Scroll-linked motion values for progress bar + parallax effects
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const haloShift = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroLift = useTransform(scrollYProgress, [0, 0.3], [0, -40]);
  const heroFade = useTransform(scrollYProgress, [0, 0.25], [1, 0.4]);

  const heroCopy = useMemo(
    () => "Design flows that keep your team calm, clear, and ready to ship.",
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll progress indicator at the very top */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-primary"
        style={{ scaleX: progress }}
      />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-0 self-center font-medium">
          <Image src="/logo2.svg" alt="NodeFlow" width={64} height={64} />
          <span className="text-lg font-semibold tracking-tight">NodeFlow</span>
        </div>
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
      </header>

      <main>
        <section className="relative overflow-hidden">
          {/* Ambient animated background layers */}
          <motion.div
            className="absolute inset-0 -z-10"
            style={{ opacity: heroFade }}
          >
            <motion.div
              className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
              animate={{ y: [0, -40, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-40 right-10 h-[460px] w-[460px] rounded-full bg-amber-400/20 blur-[160px]"
              animate={{ y: [0, 30, 0], scale: [1, 0.95, 1] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,73,50,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(245,158,11,0.12),_transparent_60%)]"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.div>
          {/* Parallax halos that move with scroll */}
          <motion.div
            className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
            style={{ y: haloShift }}
          />
          <motion.div
            className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl"
            style={{ y: haloShift }}
          />
          {/* Hero content also shifts/fades on scroll for depth */}
          <motion.div
            className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center"
            style={{ y: heroLift, opacity: heroFade }}
          >
            <div className="space-y-6">
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Flow-first collaboration
              </motion.p>
              <motion.h1
                className="text-4xl font-semibold tracking-tight md:text-5xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Ship projects with a calmer, smarter workflow.
              </motion.h1>
              <motion.p
                className="text-base text-muted-foreground md:text-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {heroCopy}
              </motion.p>
              {/* CTA buttons with hover/tap motion */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button className="shadow-lg shadow-primary/30" asChild>
                    <Link href="/signup">Start free trial</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" asChild>
                    <Link href="#workflow">See it in action</Link>
                  </Button>
                </motion.div>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span>14-day free trial</span>
                <span>No credit card required</span>
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-lg bg-[radial-gradient(circle,_rgba(148,163,184,0.3)_1px,_transparent_1px)] bg-[size:16px_16px]">
              {/* Reorder.Group enables drag-and-drop ordering */}
              <div className="flex items-center justify-between">
                <span className="text-s font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Flowboard
                </span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-500">
                  Live
                </span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Drag to reorder the flow.
              </p>
              <Reorder.Group
                axis="y"
                values={flowItems}
                onReorder={setFlowItems}
                className="relative mt-6 grid gap-4"
              >
                {flowItems.map((item, index) => (
                  <Reorder.Item
                    key={item}
                    value={item}
                    whileDrag={{ scale: 1.03 }}
                    className="flex cursor-grab items-center justify-between rounded-2xl border border-border bg-background/90 px-4 py-3 active:cursor-grabbing"
                  >
                    {" "}
                    <div className="flex items-center gap-3">
                      {" "}
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {" "}
                        {index + 1}{" "}
                      </div>
                      <div className="text-sm font-medium">{item}</div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {index % 2 === 0 ? "In progress" : "Queued"}
                    </span>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
          </motion.div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-6 pb-20">
          {/* Feature cards reveal on scroll */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Flow-native planning",
                text: "Drag tasks into focused paths that reveal dependencies and unlock momentum.",
              },
              {
                title: "Instant status briefs",
                text: "AI captures progress, blockers, and next steps after every change.",
              },
              {
                title: "Momentum analytics",
                text: "Track throughput, cycle time, and focus zones without spreadsheets.",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto w-full max-w-6xl px-6 pb-20">
          {/* 3-step timeline */}
          <div className="grid gap-10 md:grid-cols-[0.4fr_0.6fr]">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                How it works
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Three steps to a calmer launch.
              </h2>
              <p className="text-sm text-muted-foreground">
                Move from chaotic boards to clear flows in minutes.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                {
                  title: "Map the flow",
                  text: "Drag tasks into a path that shows dependencies and focus zones.",
                },
                {
                  title: "Align the team",
                  text: "Share AI summaries and assign next steps with one click.",
                },
                {
                  title: "Ship with momentum",
                  text: "Track throughput, time in stage, and bottlenecks live.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,73,50,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(245,158,11,0.18),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(250,129,40,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(160,81,255,0.22),_transparent_60%)]" /> */}
        </section>

        <section
          id="integrations"
          className="mx-auto w-full max-w-6xl px-6 pb-20"
        >
          {/* Integrations panel inspired by the provided reference */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-foreground shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,73,50,0.1),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(245,158,11,0.1),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(250,129,40,0.1),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(160,81,255,0.1),_transparent_60%)]" />
            <div className="relative flex flex-col items-center gap-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Plug AI into your own data
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                over <span className="text-primary">40 integrations</span>
              </h2>
            </div>
            <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Slack", Icon: FaSlack, color: "text-[#4A154B]" },
                { name: "GitHub", Icon: FaGithub },
                { name: "Linear", Icon: SiLinear },
                { name: "Notion", Icon: SiNotion },
                { name: "Figma", Icon: SiFigma, color: "text-[#F24E1E]" },
                { name: "Jira", Icon: SiJira, color: "text-[#2684FF]" },
                { name: "Asana", Icon: SiAsana, color: "text-[#F06A6A]" },
                {
                  name: "Google Drive",
                  Icon: SiGoogledrive,
                  color: "text-[#34A853]",
                },
                { name: "Airtable", Icon: SiAirtable, color: "text-[#FFD666]" },
                { name: "HubSpot", Icon: SiHubspot, color: "text-[#FF7A59]" },
                { name: "Zendesk", Icon: SiZendesk, color: "text-[#03363D]" },
                { name: "Dropbox", Icon: SiDropbox, color: "text-[#0061FF]" },
                { name: "Calendly", Icon: SiCalendly, color: "text-[#006BFF]" },
                { name: "Gmail", Icon: SiGmail, color: "text-[#EA4335]" },
                { name: "Stripe", Icon: SiStripe, color: "text-[#635BFF]" },
                { name: "Discord", Icon: SiDiscord, color: "text-[#5865F2]" },
              ].map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-muted/60 dark:bg-white/10">
                    <Icon className={`h-5 w-5 ${color}`} aria-hidden="true" />
                  </span>
                  <span className="font-medium text-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="compare" className="mx-auto w-full max-w-6xl px-6 pb-20">
          {/* Comparison table vs other tools */}
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Compare
                </p>
                <h2 className="text-2xl font-semibold">
                  Why teams switch to NodeFlow.
                </h2>
              </div>
              <span className="text-sm text-muted-foreground">
                Built for calm execution
              </span>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-4 bg-accent/40 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <div className="px-4 py-3">Capability</div>
                <div className="px-4 py-3">NodeFlow</div>
                <div className="px-4 py-3">Notion</div>
                <div className="px-4 py-3">Trello/Jira</div>
              </div>
              {[
                ["Flow-based planning", "Yes", "Manual", "Board only"],
                ["AI status briefs", "Included", "Limited", "Add-on"],
                ["Live dependency map", "Yes", "No", "Partial"],
                ["Focus analytics", "Yes", "No", "Limited"],
              ].map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-4 border-t border-border text-sm"
                >
                  {row.map((cell) => (
                    <div key={cell} className="px-4 py-3 text-muted-foreground">
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="mx-auto w-full max-w-6xl px-6 pb-20"
        >
          {/* Testimonial cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sofia Alvarez",
                role: "Product Lead, ArcLab",
                quote:
                  "NodeFlow cut our standups in half and made dependencies visible to everyone.",
              },
              {
                name: "Daniel Cho",
                role: "Engineering Manager, Aurora",
                quote:
                  "We finally have a workflow that feels calm. The focus map is gold.",
              },
              {
                name: "Priya Nair",
                role: "Ops Director, Sidekick",
                quote:
                  "Our launch weeks used to be chaos. Now they are organized and predictable.",
              },
            ].map((story) => (
              <motion.div
                key={story.name}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm text-muted-foreground">"{story.quote}"</p>
                <div className="mt-4 text-sm font-semibold">{story.name}</div>
                <div className="text-xs text-muted-foreground">
                  {story.role}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="workflow" className="bg-accent/50 py-20">
          {/* Workflow section with scroll reveal */}
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold tracking-tight">
                A workflow that feels light, not loud.
              </h2>
              <p className="text-muted-foreground">
                Connect planning, delivery, and retrospectives in one calm
                system. Assignments, comments, and timelines stay synced
                automatically.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs">
                  Smart queues
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs">
                  Team focus mode
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs">
                  Context snapshots
                </span>
              </div>
            </motion.div>
            <div className="grid gap-4">
              {[
                {
                  label: "Standups",
                  value: "-43% meeting time",
                },
                {
                  label: "Delivery",
                  value: "+28% faster cycles",
                },
                {
                  label: "Clarity",
                  value: "2x fewer blockers",
                },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background/80 px-5 py-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-2xl font-semibold">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-20">
          {/* Pricing tiers + FAQ accordion */}
          <div className="space-y-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Pricing
                </p>
                <h2 className="text-2xl font-semibold">
                  Pick the plan that fits your flow.
                </h2>
              </div>
              <span className="text-sm text-muted-foreground">
                Cancel anytime
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  blurb: "For personal projects and small teams.",
                  perks: ["Up to 5 teammates", "Flowboard", "Weekly summaries"],
                },
                {
                  name: "Growth",
                  price: "$18",
                  blurb: "For teams scaling delivery.",
                  perks: ["Unlimited flows", "AI briefs", "Integrations"],
                  highlight: true,
                },
                {
                  name: "Enterprise",
                  price: "Let's talk",
                  blurb: "For regulated or multi-org teams.",
                  perks: ["SAML + SCIM", "Custom SLAs", "Dedicated success"],
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={
                    tier.highlight
                      ? "rounded-3xl border border-primary/50 bg-primary/5 p-6 shadow-lg"
                      : "rounded-3xl border border-border bg-card p-6 shadow-sm"
                  }
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    {tier.highlight ? (
                      <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                        Most popular
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-3 text-3xl font-semibold">
                    {tier.price}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {tier.blurb}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {tier.perks.map((perk) => (
                      <li key={perk}>* {perk}</li>
                    ))}
                  </ul>
                  <motion.div
                    className="mt-6"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={tier.highlight ? "default" : "outline"}
                      className="w-full"
                      asChild
                    >
                      <Link href="/signup">Choose {tier.name}</Link>
                    </Button>
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">FAQ</h3>
              <div className="mt-4 grid gap-3">
                {[
                  {
                    q: "Can I switch plans later?",
                    a: "Yes. Upgrade or downgrade anytime from your workspace settings.",
                  },
                  {
                    q: "Do you offer a free trial?",
                    a: "Yes, the Growth plan includes a 14-day free trial.",
                  },
                  {
                    q: "Is my data secure?",
                    a: "We support SSO, audit logs, and encrypted storage for all plans.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="rounded-2xl border border-border bg-background px-4 py-3"
                  >
                    <summary className="cursor-pointer text-sm font-medium">
                      {item.q}
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <span>(c) 2026 NodeFlow. All rights reserved.</span>
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>All systems operational</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
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
};

export default LandingPage;
