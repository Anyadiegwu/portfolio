import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Anyadiegwu | Full-Stack & AI Engineer",
  description:
    "Portfolio of Victor Anyadiegwu, a Full-Stack and AI Engineer building intelligent applications, resilient web systems, and connected IoT experiences.",
  keywords: [
    "Victor Anyadiegwu",
    "Full-Stack Engineer",
    "AI Engineer",
    "Next.js Developer",
    "FastAPI Developer",
    "IoT Engineer",
  ],
  authors: [{ name: "Victor Anyadiegwu" }],
  creator: "Victor Anyadiegwu",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
