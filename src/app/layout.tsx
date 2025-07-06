import "./globals.css";
import { Inter, DM_Mono, DM_Serif_Display } from "next/font/google";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmMono = DM_Mono({ weight: "400", subsets: ["latin"], variable: "--font-dmmono" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dmserif" });

export const metadata: Metadata = {
  title: "Kevin Ryoma – Blog",
  description: "A modern, elegant, and playful personal blog.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${dmMono.variable} ${dmSerif.variable} bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300 min-h-screen`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
