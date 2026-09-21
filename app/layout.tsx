import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

/**
 * FONT NOTE
 * makemepulse.com actually uses "Beatrice" (Sharp Type) for display
 * and "Biotif" (Degarism Studio) for UI/labels — both are paid fonts.
 *
 * Below are free, similar-spirited alternatives via next/font/google.
 * If you purchase Beatrice / Biotif, swap this block for next/font/local:
 *
 *   import localFont from "next/font/local";
 *   const display = localFont({
 *     src: [{ path: "../public/fonts/Beatrice-Regular.woff2", weight: "400" }],
 *     variable: "--font-display",
 *   });
 */

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOUR NAME — Creative Developer",
  description: "個人形象與作品集網站 — Creative Development / Motion / WebGL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-ink text-paper font-sans antialiased overflow-x-hidden selection:bg-brass selection:text-ink">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
