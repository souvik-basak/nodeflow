"use client";
import {
  BookOpenIcon,
  CreditCardIcon,
  ExternalLinkIcon,
  FolderOpenIcon,
  HistoryIcon,
  KeyIcon,
  LifeBuoyIcon,
  LogOutIcon,
  NewspaperIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarFooter,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const menuItems = [
  {
    title: "main",
    items: [
      {
        title: "Workflows",
        icon: FolderOpenIcon,
        url: "/workflows",
      },
      {
        title: "Credentials",
        icon: KeyIcon,
        url: "/credentials",
      },
      {
        title: "Executions",
        icon: HistoryIcon,
        url: "/executions",
      },
    ],
  },
  {
    title: "help",
    items: [
      {
        title: "Documentation",
        icon: BookOpenIcon,
        url: "/docs",
      },
      {
        title: "Changelog",
        icon: NewspaperIcon,
        url: "/changelog",
      },
      {
        title: "Support",
        icon: LifeBuoyIcon,
        url: "/support",
      },
    ],
  },
];

export const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="gap-x-4 h-10 px-4">
            <Link href="/workflows" prefetch>
              <Image
                src="/logo2.svg"
                alt="NodeFlow Logo"
                width={64}
                height={64}
                className="rounded-sm"
              />
              <span className="font-bold text-lg">NodeFlow</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isHelpItem = group.title === "help";
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        isActive={
                          !isHelpItem &&
                          (item.url === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.url))
                        }
                        className="gap-x-4 h-10 px-4"
                      >
                        {isHelpItem ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <item.icon className="size-4" />
                            <span>{item.title}</span>
                            <ExternalLinkIcon className="size-3 ml-auto opacity-70" />
                          </a>
                        ) : (
                          <Link href={item.url} prefetch>
                            <item.icon className="size-4" />
                            <span>{item.title}</span>
                          </Link>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="Upgrade to Pro"
            className="gap-x-4 h-10 px-4"
            onClick={() => {}}
          >
            <StarIcon className="size-4" />
            <span>Upgrade to Pro</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="Billing Portal"
            className="gap-x-4 h-10 px-4"
            onClick={() => {}}
          >
            <CreditCardIcon className="size-4" />
            <span>Billing Portal</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="Sign Out"
            className="gap-x-4 h-10 px-4"
            onClick={() =>
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/login");
                    toast.success("Successfully signed out");
                  },
                  onError: (err) => {
                    toast.error("Failed to sign out");
                  },
                },
              })
            }
          >
            <LogOutIcon className="size-4" />
            <span>Sign Out</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
};
