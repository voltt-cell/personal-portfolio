import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/Theme";
import { Toaster } from "sonner";
import RightSide from "../components/shared/sections/right-side";
import LeftSide from "../components/shared/sections/left-side";
import Navbar from "../components/shared/sections/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loveleet Verma",
  description: "Loveleet Verma - Frontend developer. Personal Website.",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon-dark.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  metadataBase: new URL("https://loveleet.dev"),
  openGraph: {
    title: "Loveleet Verma - Portfolio",
    description:
      "Loveleet Verma - Full stack javaScript developer. Personal Website.",
    url: "https://loveleet.dev",
    siteName: "Loveleet Verma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loveleet Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen font-bodyFont text-textLight overflow-x-hidden overflow-y-auto bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-teal-950 dark:via-gray-900 dark:to-cyan-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <LeftSide />
          {children}
          <RightSide />
          <Toaster
            toastOptions={{
              classNames: {
                error: "bg-red-500",
                info: "bg-blue-400",
                success: "bg-teal-600",
                warning: "bg-orange-400",
                toast: "bg-blue-400",
                title: "text-white",
                description: "text-white",
                actionButton: "bg-zinc-400",
                cancelButton: "bg-orange-400",
                closeButton: "bg-lime-400",
                icon: "text-white",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
