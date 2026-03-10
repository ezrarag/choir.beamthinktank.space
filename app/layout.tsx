import type { Metadata } from 'next'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'
import './globals.css'

export const metadata: Metadata = {
  title: 'BEAM Chorus Platform',
  description: 'Shared-platform scaffold for chorus program routes, content rails, service requests, and dashboard tracking.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
