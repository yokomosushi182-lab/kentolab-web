import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "kento lab — where technology meets nature",
  description:
    "Boutique Go High Level support and custom builds for coaches, therapists, and SaaS platforms that serve them. Real technical help, in human language.",
  openGraph: {
    title: "kento lab",
    description: "Where technology meets nature.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
