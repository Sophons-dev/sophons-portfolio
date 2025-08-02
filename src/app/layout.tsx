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
    default: "Sophons - AI & Business Intelligence Solutions",
    template: `%s | Sophons`,
  },
  description: "Sophons is a premier AI and Business Intelligence consulting firm specializing in custom software solutions. We transform data into actionable insights and build intelligent systems that drive business growth and innovation.",
  keywords: [
    "AI Consulting",
    "Business Intelligence",
    "Data Analytics",
    "Machine Learning",
    "Custom Software Development",
    "Predictive Analytics",
    "Data Visualization",
    "Cloud Solutions",
    "Sophons",
    "AI Integration",
    "Enterprise Software",
    "Data Strategy",
    "Naga City",
    "Ateneo de Naga University",
    "Three Body Problem"
  ],
  openGraph: {
    title: "Sophons - AI & Business Intelligence Solutions",
    description: "Transform your business with Sophons' expert AI and Business Intelligence consulting services. We deliver custom software solutions and data-driven insights to help you stay ahead in the digital age.",
    url: "https://www.sophons.tech",
    siteName: "Sophons",
    // fbAppId

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sophons - AI & Business Intelligence Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  facebook: {
    appId: '1251254989809023'
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophons - AI & Business Intelligence Solutions",
    description: "Expert AI and Business Intelligence consulting services. We build intelligent systems that transform data into business value and drive growth through innovation.",
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
