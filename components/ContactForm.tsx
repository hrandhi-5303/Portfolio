'use client'
import { useRef, useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblzgdob' // ← your endpoint

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    setErrorMsg('')

    const fd = new FormData(formRef.current)
    // optional extras:
    fd.append('_subject', 'New message from hemasreerandhi.com')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        formRef.current.reset()  // ✅ clears the inputs
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="max-w-md w-full">
      {status === 'success' ? (
        <div className="rounded-xl border border-white/20 p-4 text-center">
          <p className="text-green-400 font-medium">Thanks! Your message was sent.</p>
          <button
            className="mt-4 px-4 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition"
            onClick={() => setStatus('idle')}
          >
            Send another
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={onSubmit} className="space-y-4 text-left">
          {/* honeypot to reduce spam */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="name" className="text-sm opacity-80">Name</label>
            <input
              id="name" name="name" type="text" required
              className="mt-1 w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm opacity-80">Email</label>
            <input
              id="email" name="email" type="email" required
              className="mt-1 w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm opacity-80">Message</label>
            <textarea
              id="message" name="message" rows={4} required
              className="mt-1 w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-400">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-2 w-full px-4 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>
      )}
    </div>
  )
}
