import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return <main className={`mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 ${className}`.trim()}>{children}</main>
}
