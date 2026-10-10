import "./globals.css";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
export const metadata = {
  title: "Hemasree Randhi — Senior AI & Data Engineer",
  description:
    "Senior AI & Data Engineer building Azure data platforms, distributed PySpark pipelines, telecom and financial reconciliation systems, and AI-ready data solutions.",
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
            <Link href="/#engineering">Process</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">
              Contact <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Hemasree Randhi</span>
          <span>Made with care, and a little curiosity.</span>
          <a
            href="/Hemasree_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume (PDF) ↗
          </a>
        </footer>
        <ScrollReveal />
      </body>
    </html>
  );
}
