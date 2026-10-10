import Link from "next/link";
export default function Thanks() {
  return (
    <section className="wrap section">
      <p className="eyebrow">MESSAGE RECEIVED</p>
      <h1 style={{ margin: "24px 0" }}>Thank you.</h1>
      <p>Your message was sent. I’ll get back to you soon.</p>
      <Link className="button" style={{ marginTop: 30 }} href="/#contact">
        Back to site ←
      </Link>
    </section>
  );
}
