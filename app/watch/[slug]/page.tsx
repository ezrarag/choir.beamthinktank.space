import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageContainer from '@/components/layout/PageContainer'
import { getMediaBySlug } from '@/lib/data/seed'

interface WatchPageProps {
  params: {
    slug: string
  }
}

export default function WatchPage({ params }: WatchPageProps) {
  const media = getMediaBySlug(params.slug)

  if (!media) {
    notFound()
  }

  return (
    <PageContainer className="space-y-6">
      <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
        <img src={media.thumbnailUrl} alt={media.title} className="h-64 w-full object-cover sm:h-80" />
        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.12em] text-amber-200">{media.type}</p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-100 sm:text-3xl">{media.title}</h1>
          <p className="mt-3 text-sm text-slate-300">{media.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {media.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={media.mediaUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-200"
            >
              Open Media Source
            </a>
            <Link href="/browse" className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:border-amber-200">
              Back to Browse
            </Link>
          </div>
        </div>
      </article>
    </PageContainer>
  )
}
