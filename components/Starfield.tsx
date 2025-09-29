'use client'
import { useEffect, useRef } from 'react'

type Star = { x:number; y:number; z:number; r:number; tw:number }

export default function Starfield({ debug=false }: { debug?: boolean }) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    const dpr = Math.max(1, window.devicePixelRatio || 1)

    function fit() {
      const w = window.innerWidth, h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    fit()
    window.addEventListener('resize', fit)

    // stars
    const COUNT = 180
    const stars: Star[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: 0.6 + Math.random() * 0.8,
      r: 0.8 + Math.random() * 1.8,
      tw: Math.random() * Math.PI * 2
    }))

    let t = 0
    function tick() {
      t += 0.005
      const w = window.innerWidth, h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      for (const s of stars) {
        s.x += (Math.sin(t + s.z) * 0.08) * s.z
        s.y += (Math.cos(t * 0.9 + s.z) * 0.06) * s.z
        if (s.x < -5) s.x = w + 5
        if (s.x > w + 5) s.x = -5
        if (s.y < -5) s.y = h + 5
        if (s.y > h + 5) s.y = -5

        const alpha = 0.35 + 0.6 * (0.5 + 0.5 * Math.sin(t * 3 + s.tw))
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    console.log('[Starfield] mounted')
    return () => {
      window.removeEventListener('resize', fit)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: debug ? 'rgba(255,0,0,0.15)' : 'transparent' }}
    />
  )
}
