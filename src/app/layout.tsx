import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashwini Kumar Kar — ML Engineer & Researcher",
  description:
    "ML engineer, patent holder, and researcher building intelligent systems. KIIT University graduate with 9.66 CGPA. Specializing in deep learning, computer vision, and full-stack development.",
  metadataBase: new URL("https://ashwinikumarkar.online"),
  openGraph: {
    title: "Ashwini Kumar Kar",
    description:
      "ML engineer, patent holder, and researcher building intelligent systems that solve real problems.",
    url: "https://ashwinikumarkar.online",
    siteName: "Ashwini Kumar Kar Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwini Kumar Kar — ML Engineer & Researcher",
    description:
      "ML engineer, patent holder, and researcher building intelligent systems.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ashwinikumarkar.online" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashwini Kumar Kar",
              url: "https://ashwinikumarkar.online",
              jobTitle: "ML Engineer & Researcher",
              sameAs: [
                "https://github.com/lucifer1642",
                "https://www.linkedin.com/in/ashwinikumarkar",
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "KIIT University",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Lovely Professional University",
                },
              ],
              knowsAbout: [
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Patent Holder",
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <CustomCursor />
        <Navbar />
        <ScrollProgress />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
