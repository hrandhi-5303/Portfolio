import type { Metadata } from "next";
import ArrowUpRight from "@/components/ArrowUpRight";
export const metadata: Metadata = {
  title: "Thank you | Hemasree Randhi",
  description: "Your message has been received.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thanks" },
};
import Link from "next/link";
export default function Thanks() {
  return (
    <section className="wrap section">
      <p className="eyebrow">MESSAGE RECEIVED</p>
      <h1 style={{ margin: "24px 0" }}>Thank you.</h1>
      <p>Your message was sent. I’ll get back to you soon.</p>
      <Link className="button" style={{ marginTop: 30 }} href="/#contact">
        Back to site <ArrowUpRight direction="left" />
      </Link>
    </section>
  );
}
