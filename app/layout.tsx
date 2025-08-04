import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Learningly AI - AI-Powered Learning Platform",
    template: "%s | Learningly AI",
  },
  description:
    "Auto-generate interactive study materials like summaries, quizzes, and flashcards from your documents and videos.",
  keywords: [
    "AI learning",
    "study tools",
    "quiz generator",
    "summary generator",
    "flashcard maker",
    "e-learning",
    "edtech",
  ],
  authors: [{ name: "Learningly AI Team" }],
  creator: "Learningly AI",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Learningly AI - AI-Powered Learning Platform",
    description:
      "Transform your study materials into interactive content with the power of AI.",
    siteName: "Learningly AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learningly AI - AI-Powered Learning Platform",
    description:
      "Generate quizzes, summaries, and flashcards in seconds with Learningly AI.",
    creator: "@learninglyai",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, fontHeading.variable)}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
        )}
        suppressHydrationWarning
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
