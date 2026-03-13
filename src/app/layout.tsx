import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KannadaTalk – Learn Spoken Kannada",
  description:
    "A Duolingo-style web app for English speakers to learn practical, everyday spoken Kannada through short interactive lessons.",
  keywords: [
    "Kannada",
    "learn Kannada",
    "language learning",
    "Kannada phrases",
    "Duolingo-style",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "KannadaTalk" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "KannadaTalk – Learn Spoken Kannada",
    description:
      "Practice core Kannada phrases with a friendly, game-like learning experience tailored for English speakers.",
    url: "http://localhost:3000",
    siteName: "KannadaTalk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KannadaTalk – Learn Spoken Kannada",
    description:
      "Quick, modern web app for picking up essential spoken Kannada phrases.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
