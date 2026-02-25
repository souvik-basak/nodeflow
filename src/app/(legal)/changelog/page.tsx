import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, SparklesIcon, WrenchIcon, BugIcon } from "lucide-react";

const changelogEntries = [
  {
    version: "2.4.0",
    date: "February 20, 2026",
    type: "major",
    changes: {
      features: [
        "Added AI-powered workflow suggestions based on your usage patterns",
        "Introduced workflow templates marketplace with 100+ pre-built automations",
        "New visual debugger with step-by-step execution tracking",
        "Batch operations support for processing multiple items in parallel",
      ],
      improvements: [
        "Enhanced editor performance - 3x faster rendering for large workflows",
        "Redesigned credential management UI with better security indicators",
        "Improved error messages with actionable suggestions",
        "Added dark mode support for workflow editor",
      ],
      fixes: [
        "Fixed infinite loop detection in recursive workflows",
        "Resolved issue with webhook triggers not firing on first execution",
        "Fixed data mapping losing precision on large numbers",
      ],
    },
  },
  {
    version: "2.3.2",
    date: "February 10, 2026",
    type: "patch",
    changes: {
      features: [],
      improvements: [
        "Added keyboard shortcuts for common workflow operations",
        "Improved search functionality in node selector",
        "Enhanced mobile responsiveness for workflow monitoring",
      ],
      fixes: [
        "Fixed memory leak in real-time execution monitoring",
        "Resolved timezone issues in scheduled workflows",
        "Fixed OAuth2 refresh token handling for Google services",
        "Corrected execution history pagination",
      ],
    },
  },
  {
    version: "2.3.0",
    date: "January 28, 2026",
    type: "minor",
    changes: {
      features: [
        "New integrations: Slack Workflows, Notion API 2.0, Airtable",
        "Advanced filtering and search in executions page",
        "Workflow versioning and rollback capabilities",
        "Export/import workflows as JSON",
      ],
      improvements: [
        "Reduced cold start time for scheduled workflows by 60%",
        "Enhanced credential encryption with AES-256-GCM",
        "Better error context in execution logs",
      ],
      fixes: [
        "Fixed issue with HTTP request node timeout handling",
        "Resolved race condition in parallel branch execution",
        "Fixed credential dropdown not showing all available options",
      ],
    },
  },
  {
    version: "2.2.1",
    date: "January 15, 2026",
    type: "patch",
    changes: {
      features: [],
      improvements: [
        "Optimized database queries for faster workflow loading",
        "Added retry mechanism for transient API failures",
        "Improved validation messages for node configuration",
      ],
      fixes: [
        "Fixed workflow activation toggle not updating in real-time",
        "Resolved duplicate execution issue on manual triggers",
        "Fixed date formatting in execution history",
      ],
    },
  },
  {
    version: "2.2.0",
    date: "January 5, 2026",
    type: "minor",
    changes: {
      features: [
        "Introduced workflow folders for better organization",
        "Added custom webhook paths for branded integrations",
        "New condition node with visual expression builder",
        "Team collaboration features for Pro plans",
      ],
      improvements: [
        "Redesigned onboarding flow for new users",
        "Enhanced documentation with interactive examples",
        "Faster workflow execution engine with optimized runtime",
      ],
      fixes: [
        "Fixed node connection issues in Safari browser",
        "Resolved credential validation errors for Azure services",
        "Fixed execution timeout not respecting custom values",
      ],
    },
  },
];

const ChangeItem = ({
  icon: Icon,
  iconColor,
  items,
}: {
  icon: any;
  iconColor: string;
  items: string[];
}) => {
  if (items.length === 0) return null;

  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-3 items-start">
          <Icon className={`size-4 mt-0.5 flex-shrink-0 ${iconColor}`} />
          <p className="text-sm text-foreground">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default function ChangelogPage() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
        <p className="text-muted-foreground text-lg">
          Stay updated with the latest features, improvements, and fixes
        </p>
      </div>

      <Separator />

      {/* Changelog Entries */}
      <div className="space-y-8">
        {changelogEntries.map((entry) => (
          <Card key={entry.version} className="overflow-hidden">
            <CardHeader className="bg-muted/30">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-2xl">v{entry.version}</CardTitle>
                  <Badge
                    variant={
                      entry.type === "major"
                        ? "default"
                        : entry.type === "minor"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {entry.type}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {entry.date}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {entry.changes.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    <SparklesIcon className="size-4 text-primary" />
                    New Features
                  </h3>
                  <ChangeItem
                    icon={CheckCircle2}
                    iconColor="text-green-600 dark:text-green-500"
                    items={entry.changes.features}
                  />
                </div>
              )}

              {entry.changes.improvements.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    <WrenchIcon className="size-4 text-blue-600 dark:text-blue-500" />
                    Improvements
                  </h3>
                  <ChangeItem
                    icon={CheckCircle2}
                    iconColor="text-blue-600 dark:text-blue-500"
                    items={entry.changes.improvements}
                  />
                </div>
              )}

              {entry.changes.fixes.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-base flex items-center gap-2">
                    <BugIcon className="size-4 text-orange-600 dark:text-orange-500" />
                    Bug Fixes
                  </h3>
                  <ChangeItem
                    icon={CheckCircle2}
                    iconColor="text-orange-600 dark:text-orange-500"
                    items={entry.changes.fixes}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Subscribe to Updates</CardTitle>
          <CardDescription>
            Get notified about new features and important changes
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4 flex-wrap text-sm">
          <a
            href="#"
            className="font-medium text-primary hover:underline"
          >
            RSS Feed →
          </a>
          <a
            href="#"
            className="font-medium text-primary hover:underline"
          >
            Email Notifications →
          </a>
          <a
            href="#"
            className="font-medium text-primary hover:underline"
          >
            Twitter Updates →
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
