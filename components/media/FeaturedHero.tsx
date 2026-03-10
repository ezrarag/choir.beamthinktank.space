import Link from 'next/link'
import type { MediaItem, Program } from '@/types/domain'

interface FeaturedHeroProps {
  media: MediaItem
  program: Program
}

export default function FeaturedHero({ media, program }: FeaturedHeroProps) {
  return (
    <section className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-[#2b1118] via-[#1a202f] to-[#0a0d15] p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.14em] text-amber-200/90">{program.name} Featured</p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">{media.title}</h1>
      <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">{media.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/watch/${media.slug}`}
          className="rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
        >
          Watch Feature
        </Link>
        <Link href="/browse" className="rounded-lg border border-slate-500 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-200">
          Browse Library
        </Link>
      </div>
    </section>
  )
}
