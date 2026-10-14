import "./globals.css";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";
import ArrowUpRight from "@/components/ArrowUpRight";
import {
  siteUrl,
  siteTitle as title,
  siteDescription as description,
  person,
} from "@/lib/seo";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Hemasree Randhi",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
  title,
  description,
};
export const viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Link className="wordmark" href="/">
            hemasree randhi
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/#work">Work</Link>
            <Link href="/#engineering">Engineering</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">
              Contact <ArrowUpRight />
            </Link>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Hemasree Randhi</span>
          <span>Senior Data Engineer · Azure / PySpark / SQL</span>
          <a
            href="/Hemasree_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume (PDF) <ArrowUpRight direction="down" />
          </a>
        </footer>
        <ScrollReveal />
      </body>
    </html>
  );
}
