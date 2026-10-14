import "./globals.css";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
const title = "Hemasree Randhi | Senior Data Engineer";
const description =
  "Senior Data Engineer with 6+ years building Azure data platforms, distributed PySpark pipelines, telecom and financial reconciliation frameworks, and analytics-ready datasets.";
export const metadata = {
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
  title: "Hemasree Randhi | Senior Data Engineer",
  description:
    "Senior Data Engineer building Azure data platforms, distributed PySpark pipelines, telecom and financial reconciliation systems, and analytics-ready datasets.",
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
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Link className="wordmark" href="/">
            hemasree randhi<span aria-hidden="true"> ✳</span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/#work">Work</Link>
            <Link href="/#engineering">Engineering</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">
              Contact <span aria-hidden="true">↗</span>
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
            Download Resume (PDF) ↓
          </a>
        </footer>
        <ScrollReveal />
      </body>
    </html>
  );
}
