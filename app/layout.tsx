import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClient } from "convex/browser";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docket",
  description: "Duplication of Notion to manage tasks, projects, and learn.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon-light-trans.svg",
        href: "/icon-light-trans.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon-dark.svg",
        href: "/icon-dark.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="docket-theme">
            {children}
            </ThemeProvider>
          </ConvexClientProvider>
      </body>
    </html>
  );
}
