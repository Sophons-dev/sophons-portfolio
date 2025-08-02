import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sophons.tech"),
  title: {
    default: "Sophons - Proactive Problem-Solving for Modern Web Challenges",
    template: `%s | Sophons`,
  },
  description: "Sophons is a forward-thinking portfolio showcasing expertise in web and mobile development, AI integration, and cloud infrastructure. Discover innovative solutions to complex technical challenges.",
  keywords: [
    "Web Development",
    "Mobile Development",
    "AI Integration",
    "Cloud Infrastructure",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Sophons",
    "Three body problem",
    "Business Intelligence",
    "Ateneo de Naga University",
    "Naga City"
  ],
  openGraph: {
    title: "Sophons - Proactive Problem-Solving for Modern Web Challenges",
    description: "Sophons is a forward-thinking portfolio showcasing expertise in web and mobile development, AI integration, and cloud infrastructure. Discover innovative solutions to complex technical challenges.",
    url: "https://www.sophons.tech",
    siteName: "Sophons",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sophons - Proactive Problem-Solving for Modern Web Challenges",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophons - Proactive Problem-Solving for Modern Web Challenges",
    description: "Sophons is a forward-thinking portfolio showcasing expertise in web and mobile development, AI integration, and cloud infrastructure. Discover innovative solutions to complex technical challenges.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.sophons.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
