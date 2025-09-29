import './globals.css'
import Link from 'next/link'
import Starfield from '@/components/Starfield'

export const metadata = {
  title: 'Hemasree Randhi — Software Engineer',
  description: 'Portfolio'
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-black text-white">
        {/* Animated background behind everything */}
        <Starfield />

        {/* Fixed header so sections can snap cleanly */}
        <header className="fixed top-0 left-0 right-0 z-20 h-16 border-b border-white/10 bg-black/40 backdrop-blur-sm">
          <nav className="container mx-auto max-w-5xl px-4 flex h-full items-center justify-between">
            <Link href="/#home" className="font-semibold">Hemasree Randhi</Link>
            <div className="flex gap-6 text-sm">
              <Link href="/#experience">Experience</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </nav>
        </header>

        {/* Scroll-snap container = the whole viewport below the header */}
        <main
          className="
            relative z-10
            md:h-screen h-dvh
            overflow-y-auto
            md:snap-y md:snap-mandatory
            pt-16
            overscroll-contain
          "
        >
          {/* display: contents flattens the wrapper so your sections
             (home / experience / projects / contact)
             behave like direct children of the snap container */}
          <div className="contents">
            {children}
          </div>
        </main>

        {/* Optional tiny footer (outside snap flow) */}
        <footer className="pointer-events-none fixed bottom-2 left-0 right-0 z-10 text-left text-xs opacity-60">
          © {new Date().getFullYear()} Hemasree Randhi
        </footer>
      </body>
    </html>
  )
}
