import Link from 'next/link'
import PageContainer from '@/components/layout/PageContainer'
import FeaturedHero from '@/components/media/FeaturedHero'
import MediaRail from '@/components/media/MediaRail'
import SectionHeading from '@/components/shared/SectionHeading'
import { facultyProfiles, featuredMedia, mediaRails, offerings } from '@/lib/data/seed'
import { getActiveProgram } from '@/lib/config/programs'

export default function HomePage() {
  const program = getActiveProgram()
  const previewRails = mediaRails.slice(0, 3)

  return (
    <PageContainer className="space-y-10">
      <FeaturedHero media={featuredMedia} program={program} />

      <section className="space-y-4">
        <SectionHeading
          title="Browse The Chorus"
          subtitle="Streaming-style rails with participation pathways, faculty credibility, and service activation routes."
        />
        {previewRails.map((rail) => (
          <MediaRail key={rail.id} title={rail.title} items={rail.items} />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-amber-200">Services</p>
          <h3 className="mt-2 text-lg font-semibold">Select and request offerings</h3>
          <p className="mt-2 text-sm text-slate-300">{offerings.length} mock offerings are ready for UI development and future Firebase wiring.</p>
          <Link href="/services" className="mt-3 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100">
            Open services
          </Link>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-amber-200">Participate</p>
          <h3 className="mt-2 text-lg font-semibold">Independent and institutional join flow</h3>
          <p className="mt-2 text-sm text-slate-300">Route users into participation paths before full auth and backend integration are complete.</p>
          <Link href="/join" className="mt-3 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100">
            Open join flow
          </Link>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-amber-200">Dashboard</p>
          <h3 className="mt-2 text-lg font-semibold">Track request and deliverable status</h3>
          <p className="mt-2 text-sm text-slate-300">Foundational dashboard shell mirrors orchestra concepts with chorus mock records.</p>
          <Link href="/dashboard" className="mt-3 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100">
            Open dashboard
          </Link>
        </article>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <SectionHeading title="Faculty Credibility" subtitle={facultyProfiles[0]?.bio} />
        <p className="mt-3 text-sm text-slate-300">
          Lead faculty profile included in mock data: <strong>{facultyProfiles[0]?.name}</strong>, {facultyProfiles[0]?.title}.
        </p>
      </section>
    </PageContainer>
  )
}
