import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Header } from "@/components/Header";
import { description, phoneTel, siteName } from "@/lib/site";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteName,
    description,
    locale: "ar_EG",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#047c7b",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: siteName,
  description,
  telephone: phoneTel,
  areaServed: ["اسيوط", "المنيا", "طريق الكريمات"],
  openingHours: "Mo-Su 00:00-23:59",
  url: "/",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a className="skip" href="#content">تخطي إلى المحتوى</a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
