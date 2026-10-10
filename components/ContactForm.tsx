"use client";
import { useRef, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblzgdob"; // ← your endpoint

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(formRef.current);
    // optional extras:
    fd.append("_subject", "New message from hemasreerandhi.com");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        formRef.current.reset(); // ✅ clears the inputs
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="contact-form">
      {status === "success" ? (
        <div className="form-success" role="status">
          <p className="font-medium">Thanks! Your message was sent.</p>
          <button className="button" onClick={() => setStatus("idle")}>
            Send another
          </button>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={onSubmit}
          aria-busy={status === "sending"}
        >
          {/* honeypot to reduce spam */}
          <input
            type="text"
            name="_gotcha"
            hidden
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required />
          </div>

          {status === "error" && (
            <p className="form-error" role="alert">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="button"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}
