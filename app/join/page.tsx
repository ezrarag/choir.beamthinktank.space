import Link from 'next/link'
import PageContainer from '@/components/layout/PageContainer'
import SectionHeading from '@/components/shared/SectionHeading'
import { facultyProfiles } from '@/lib/data/seed'

export default function JoinPage() {
  const faculty = facultyProfiles[0]

  return (
    <PageContainer className="space-y-8">
      <SectionHeading
        title="Join"
        subtitle="Participation placeholder for independent singers, institutional representatives, and faculty contributors."
      />

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="text-lg font-semibold text-slate-100">Independent Participant</h3>
          <p className="mt-2 text-sm text-slate-300">Submit your participation profile, preferred areas, and availability.</p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="text-lg font-semibold text-slate-100">Institution Representative</h3>
          <p className="mt-2 text-sm text-slate-300">Request recruitment or performance services for your organization.</p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="text-lg font-semibold text-slate-100">Faculty / Program Lead</h3>
          <p className="mt-2 text-sm text-slate-300">Coordinate educational, media, and community pathways.</p>
        </article>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        <p className="text-xs uppercase tracking-[0.12em] text-amber-200">Faculty Spotlight</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-100">{faculty.name}</h3>
        <p className="text-sm text-slate-300">{faculty.title}</p>
        <p className="mt-2 text-sm text-slate-300">{faculty.bio}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {faculty.focusAreas.map((area) => (
            <span key={area} className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300">
              {area}
            </span>
          ))}
        </div>
      </section>

      <Link href="/services" className="inline-flex rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-200">
        Continue to Services
      </Link>
    </PageContainer>
  )
}
