import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import { profile } from "@/data/profile";
import { siteUrl } from "@/data/site";

const description = `${profile.title} with 6+ years of experience in React, Next.js, TypeScript and Node.js. Based in ${profile.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.nameAscii} – ${profile.title}`,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: `${profile.nameAscii} – ${profile.title}`,
    description,
    siteName: profile.nameAscii,
  },
  twitter: { card: "summary", title: `${profile.nameAscii} – ${profile.title}`, description },
};

export const viewport: Viewport = {
  themeColor: "#0b0d17",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.nameAscii,
  alternateName: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Ho Chi Minh City", addressCountry: "VN" },
  sameAs: profile.socials.map((s) => s.href),
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Java", "Spring Boot"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
