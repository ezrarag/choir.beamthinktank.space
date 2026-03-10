import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Browse' },
  { href: '/services', label: 'Services' },
  { href: '/join', label: 'Join' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/admin', label: 'Admin' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-300">
          BEAM Chorus
        </Link>
        <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-amber-200">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
