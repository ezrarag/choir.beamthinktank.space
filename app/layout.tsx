import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BEAM Choir & Vocal Arts Foundation',
  description: 'Supporting gospel, classical, opera, and contemporary vocal arts through community concerts, music education, and facility development.',
  keywords: 'choir, vocal arts, gospel, classical, opera, contemporary, music education, community concerts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
