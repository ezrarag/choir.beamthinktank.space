import Link from 'next/link'
import type { MediaItem } from '@/types/domain'

interface MediaRailProps {
  title: string
  items: MediaItem[]
}

export default function MediaRail({ title, items }: MediaRailProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section>
      <h3 className="mb-3 text-lg font-semibold text-slate-100">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
            <img src={item.thumbnailUrl} alt={item.title} className="h-36 w-full object-cover" />
            <div className="p-3">
              <h4 className="text-sm font-semibold text-slate-100">{item.title}</h4>
              <p className="mt-1 line-clamp-2 text-xs text-slate-300">{item.description}</p>
              <Link href={`/watch/${item.slug}`} className="mt-3 inline-flex text-xs font-semibold text-amber-200 hover:text-amber-100">
                Open
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
