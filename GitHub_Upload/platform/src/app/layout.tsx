import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chasing 36 — A Golf App for the rest of us.",
  description:
    "Run a golf tournament, league, or club with a handicap that actually keeps up with how you play. Chasing 36 is a golf app for the rest of us.",
  icons: {
    icon: "https://chasing36.com/C36_Browser_Icon.png",
    apple: "https://chasing36.com/C36_Browser_Icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">
        {children}
      </body>
    </html>
  );
}
