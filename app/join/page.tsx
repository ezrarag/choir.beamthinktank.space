import Link from 'next/link'
import { facultyProfiles } from '@/lib/data/seed'

export const metadata = {
  title: 'Vocal Auditions & Guild Membership | BEAM Choral Guild',
  description: 'Audition for SATB voice sections, apply for sectional leadership, and register your choral credentials.',
}

export default function JoinPage() {
  const faculty = facultyProfiles[0]

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-theatre-gold-500/20 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400 font-theatre-cinzel">
          <span>— ❖ —</span>
          <span>Auditions & Vocal Roster Intake</span>
          <span>— ❖ —</span>
        </div>
        <h1 className="font-theatre-serif text-4xl sm:text-5xl text-theatre-parchment-50 font-normal tracking-tight">
          Enter the Living Choral Sanctuary
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-theatre-parchment-300 leading-relaxed font-sans font-light">
          We invite experienced choristers, vocal arrangers, and section captains to audition for active SATB seats across the 2026 / 2027 season. All rehearsals are tracked and compensated via BEAM honorariums.
        </p>
      </div>

      {/* 3 Audition Pathways */}
      <div className="grid gap-6 md:grid-cols-3">
        <article className="theatre-card space-y-3">
          <div className="text-[10px] font-theatre-cinzel uppercase tracking-[0.2em] text-theatre-gold-400">
            Section 01 · SATB Choristers
          </div>
          <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50">
            Independent Singer
          </h3>
          <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
            Audition for Soprano, Alto, Tenor, or Bass roster positions. Includes access to rehearsal stems, robe fitting, and uncompensated hour honorariums.
          </p>
          <div className="pt-3 border-t border-theatre-gold-500/20">
            <Link href="/profile" className="theatre-btn-gold text-[10px] w-full text-center py-2.5 block">
              Open Vocal Profile Desk
            </Link>
          </div>
        </article>

        <article className="theatre-card space-y-3">
          <div className="text-[10px] font-theatre-cinzel uppercase tracking-[0.2em] text-theatre-gold-400">
            Section 02 · Symphonic & Academic
          </div>
          <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50">
            Institutional Partner
          </h3>
          <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
            Conservatories, symphony orchestras, and liturgical sanctuaries requesting chorister augmentation or clinic residencies.
          </p>
          <div className="pt-3 border-t border-theatre-gold-500/20">
            <Link href="/services" className="theatre-btn-outline text-[10px] w-full text-center py-2.5 block">
              Commission Chorus Services
            </Link>
          </div>
        </article>

        <article className="theatre-card space-y-3">
          <div className="text-[10px] font-theatre-cinzel uppercase tracking-[0.2em] text-theatre-gold-400">
            Section 03 · Artistic Leadership
          </div>
          <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50">
            Section Leader & Producer
          </h3>
          <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
            Lead sectional rehearsals, arrange polyphonic counterpoint, or manage vocal tracking and stem engineering in studio sessions.
          </p>
          <div className="pt-3 border-t border-theatre-gold-500/20">
            <Link href="/profile?id=profile-paul-choral" className="theatre-btn-outline text-[10px] w-full text-center py-2.5 block">
              View Producer Paradigm
            </Link>
          </div>
        </article>
      </div>

      {/* Audition Preparation & Faculty Spotlight */}
      <section className="border border-theatre-gold-500/40 bg-theatre-dark-900/90 p-8 space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="h-24 w-24 shrink-0 overflow-hidden border-2 border-theatre-gold-500/60 bg-theatre-dark-800">
            {faculty.headshotUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={faculty.headshotUrl}
                alt={faculty.name}
                className="h-full w-full object-cover grayscale contrast-125"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-theatre-cinzel text-3xl text-theatre-gold-400">
                Dr
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="text-[10px] font-theatre-cinzel uppercase tracking-[0.25em] text-theatre-gold-400">
              Audition Panel & Artistic Direction
            </div>
            <h3 className="font-theatre-serif text-2xl sm:text-3xl text-theatre-parchment-50 font-normal">
              {faculty.name} · {faculty.title}
            </h3>
            <p className="text-xs sm:text-sm text-theatre-parchment-300 leading-relaxed font-sans">
              {faculty.bio}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {faculty.credentials.map((cred) => (
                <span
                  key={cred}
                  className="text-[10px] border border-theatre-gold-500/30 px-2 py-0.5 text-theatre-gold-300 font-mono"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audition Requirements Checklist */}
      <section className="theatre-card p-6 sm:p-8 space-y-4">
        <h4 className="font-theatre-cinzel text-xs uppercase tracking-[0.25em] text-theatre-gold-300">
          Audition Audition Preparation Checklist
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-theatre-parchment-300 font-sans">
          <div className="flex items-start gap-2.5">
            <span className="text-theatre-gold-400">❖</span>
            <div>
              <strong className="text-theatre-parchment-100 block">Vocal Range & Compass:</strong>
              Demonstrate comfortable pitch limits (lowest and highest modal note) and unforced tessitura.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-theatre-gold-400">❖</span>
            <div>
              <strong className="text-theatre-parchment-100 block">Sight-Singing Solfège:</strong>
              Short sight-reading passage in major or minor mode (fixed or movable Do accepted).
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-theatre-gold-400">❖</span>
            <div>
              <strong className="text-theatre-parchment-100 block">Prepared Work / Art Song:</strong>
              One selection from the African American spiritual canon, classical sacred motet, or oratorio repertoire.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-theatre-gold-400">❖</span>
            <div>
              <strong className="text-theatre-parchment-100 block">Rehearsal Commitments:</strong>
              Confirm availability for Tuesday/Thursday call times and concert black attire compliance.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
