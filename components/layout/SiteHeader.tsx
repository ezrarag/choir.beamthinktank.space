'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#programme', label: 'Season Programme' },
  { href: '/#roster', label: 'Vocal Roster' },
  { href: '/profile', label: 'Choral Profile & Stems' },
  { href: '/services', label: 'Box Office & Services' },
  { href: '/join', label: 'Auditions & Guild' },
  { href: '/dashboard', label: 'Desk' },
]

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-theatre-gold-500/30 bg-theatre-dark-950/95 backdrop-blur-md">
      {/* Top Vintage Theatrical Stage Ticker */}
      <div className="border-b border-theatre-gold-500/20 bg-theatre-dark-900/90 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-theatre-parchment-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-theatre-gold-400 animate-pulse" />
            <span className="font-theatre-cinzel text-theatre-gold-300">Season 2026 / 2027</span>
            <span className="hidden text-theatre-gold-600 sm:inline">|</span>
            <span className="hidden sm:inline text-theatre-parchment-400">Main Choral Sanctuary & Proscenium Hall</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] tracking-[0.25em]">
            <span className="text-theatre-gold-400 font-semibold">Next Call: Oct 14 · 17:30 EST</span>
            <Link
              href="/profile"
              className="text-theatre-parchment-300 hover:text-theatre-gold-300 transition-colors"
            >
              Sign In to Vocal CV
            </Link>
          </div>
        </div>
      </div>

      {/* Main Playbill Nav Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Theatrical Crest / Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-theatre-gold-400/60 bg-gradient-to-br from-theatre-burgundy-900 to-theatre-dark-900 text-theatre-gold-300 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <span className="font-theatre-cinzel text-base font-bold tracking-widest">𝔅</span>
          </div>
          <div>
            <div className="font-theatre-cinzel text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-theatre-gold-300 group-hover:text-theatre-gold-200 transition-colors">
              BEAM Choral Guild
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-theatre-parchment-400">
              Vocal Sanctuary & Theatre
            </div>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-[12px] uppercase tracking-[0.18em]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-theatre-gold-300 font-semibold border-b border-theatre-gold-400 pb-0.5'
                    : 'text-theatre-parchment-200 hover:text-theatre-gold-300'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/profile"
            className="theatre-btn-gold text-[10px] py-2 px-4 hidden sm:inline-flex"
          >
            Vocal Profile
          </Link>
          <Link
            href="/join"
            className="theatre-btn-outline text-[10px] py-2 px-3"
          >
            Audition
          </Link>
        </div>
      </div>

      {/* Mobile Nav Sub-strip */}
      <div className="flex lg:hidden overflow-x-auto border-t border-theatre-gold-500/20 bg-theatre-dark-900/95 px-4 py-2 text-[11px] uppercase tracking-[0.16em] gap-4 scrollbar-none">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-theatre-parchment-300 hover:text-theatre-gold-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
