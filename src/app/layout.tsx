import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "My Personal Space - Thoughts, Photos & Memories",
  description: "A personal corner of the internet where I share my thoughts, capture memories, and showcase moments that matter.",
  keywords: ["blog", "personal", "thoughts", "photos", "memories", "portfolio"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  openGraph: {
    title: "My Personal Space",
    description: "A personal corner of the internet where I share my thoughts, capture memories, and showcase moments that matter.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Personal Space",
    description: "A personal corner of the internet where I share my thoughts, capture memories, and showcase moments that matter.",
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
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
