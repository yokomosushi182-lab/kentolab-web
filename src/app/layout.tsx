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
  title: "kento lab: full-service marketing for coaching businesses",
  description:
    "GHL setup and automation, paid media (Google & Meta), content creation, and community management for coaches, therapists, and the SaaS platforms built around them.",
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
