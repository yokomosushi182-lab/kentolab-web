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
  metadataBase: new URL("https://kentolab.com"),
  title: {
    default: "kento lab — Full-Service Marketing for Coaching Businesses",
    template: "%s | kento lab",
  },
  description:
    "GHL setup and automation, paid media (Google & Meta Ads), content creation, and community management for coaches, therapists, and SaaS platforms built around them. A real team, not a one-time fix.",
  keywords: [
    "GoHighLevel agency",
    "GHL setup",
    "coaching business marketing",
    "marketing for coaches",
    "Go High Level experts",
    "paid media for coaches",
    "Meta Ads coaches",
    "Google Ads coaches",
    "community management coaches",
    "coaching SaaS marketing",
    "kento lab",
  ],
  authors: [{ name: "kento lab", url: "https://kentolab.com" }],
  creator: "kento lab",
  publisher: "kento lab",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://kentolab.com" },
  openGraph: {
    title: "kento lab — Full-Service Marketing for Coaching Businesses",
    description:
      "GHL setup, paid media, content, and community management — one team built around your coaches.",
    type: "website",
    url: "https://kentolab.com",
    siteName: "kento lab",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "kento lab — Full-Service Marketing for Coaching Businesses",
    description:
      "GHL setup, paid media, content, and community management — one team built around your coaches.",
    creator: "@kentolab",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kentolab.com/#organization",
      name: "kento lab",
      url: "https://kentolab.com",
      logo: {
        "@type": "ImageObject",
        url: "https://kentolab.com/icon.svg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English", "Spanish"],
        url: "https://wa.me/5492944157182",
      },
      sameAs: ["https://www.instagram.com/kento.lab"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://kentolab.com/#service",
      name: "kento lab",
      url: "https://kentolab.com",
      description:
        "Full-service marketing team for coaching businesses: GHL setup and automation, paid media (Google & Meta Ads), content creation, and community management.",
      priceRange: "$$",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "kento lab Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "GoHighLevel (GHL) Setup & Automation",
              description:
                "Full GHL CRM setup, funnel building, automation workflows, and ongoing platform management for coaching businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Paid Media Management",
              description:
                "Google Ads and Meta Ads campaign strategy, setup, and management optimized for coaches and course creators.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Creation",
              description:
                "Social media content, copywriting, and creative assets tailored to the coaching industry.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Community Management",
              description:
                "Moderation, engagement, and growth management for coaching community platforms.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Office Hours Support",
              description:
                "Weekly live group sessions inside GHL for coaching clients — hands-on support that reduces churn.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://kentolab.com/#website",
      url: "https://kentolab.com",
      name: "kento lab",
      publisher: { "@id": "https://kentolab.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://kentolab.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is kento lab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "kento lab is a full-service marketing team specializing in GoHighLevel (GHL) setup, paid media (Google & Meta Ads), content creation, and community management for coaching businesses and SaaS platforms built around coaches.",
          },
        },
        {
          "@type": "Question",
          name: "What is Office Hours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Office Hours is a weekly live group session where kento lab specialists work inside GHL with your coaching clients, answering questions and solving platform issues in real time — reducing churn and increasing retention.",
          },
        },
        {
          "@type": "Question",
          name: "Do you only work with coaches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our primary focus is coaches, therapists, and the SaaS platforms built around them. We understand the coaching business model deeply and speak the language of your clients, not just GHL's.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started with kento lab?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can book a free discovery call at kentolab.com or reach us directly on WhatsApp. No pressure — just a real conversation about your business and how we can help.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
