import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nodeflow",
    template: "%s — Nodeflow",
  },
  description: "Flow-native planning for modern teams.",
  openGraph: {
    title: {
      default: "Nodeflow",
      template: "%s — Nodeflow",
    },
    description: "Flow-native planning for modern teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Nodeflow",
      template: "%s — Nodeflow",
    },
    description: "Flow-native planning for modern teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TRPCReactProvider>
          <ThemeProvider>
            <SmoothScroll />
            <div className="fixed right-4 top-4 z-50">
              <ThemeToggle />
            </div>
            {children}
            <Toaster position="top-right" />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
