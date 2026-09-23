import Link from 'next/link'
import SeasonProgramme from '@/components/theatre/SeasonProgramme'
import {
  choralProfiles,
  seasonProgramme,
} from '@/lib/data/seed'

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      {/* 1. Minimalist Atmospheric Theatrical Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center border-b border-theatre-gold-500/15 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Ambient Stage Backdrop */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 filter contrast-125"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark-950 via-theatre-dark-950/90 to-theatre-burgundy-950/30" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 pt-16 pb-20">
          {/* Subtle Season Tag */}
          <div className="inline-flex items-center gap-2.5 text-[11px] font-theatre-cinzel uppercase tracking-[0.3em] text-theatre-gold-400">
            <span>Season 2026 / 2027</span>
            <span className="text-theatre-gold-600">·</span>
            <span className="text-theatre-parchment-400">The Living Vocal Sanctuary</span>
          </div>

          {/* Grand Minimalist Serif Title */}
          <h1 className="font-theatre-serif text-4xl sm:text-6xl md:text-7xl font-normal text-theatre-parchment-50 tracking-tight leading-[1.08]">
            Where Sacred Liturgy Meets <br className="hidden sm:inline" />
            <span className="italic font-light text-theatre-gold-300">
              Symphonic Choral Art
            </span>
          </h1>

          {/* Airy Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-theatre-parchment-300 leading-relaxed font-sans font-light">
            Preserving and performing the African American sacred choral cannon, polyphonic motets, and contemporary vocal crossover—grounded in decoupled participant identity and rehearsal equity.
          </p>

          {/* Minimalist Dual CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#programme" className="theatre-btn-gold">
              Explore 2026 Season
            </a>
            <Link href="/join" className="theatre-btn-outline">
              Audition for SATB Section
            </Link>
          </div>

          {/* Subtle Metric Strip (Hairline divider, no heavy boxes) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 text-center max-w-3xl mx-auto border-t border-theatre-gold-500/10">
            <div>
              <div className="font-theatre-serif text-3xl font-light text-theatre-gold-200">
                60
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-theatre-parchment-400 mt-1">
                Auditioned Choristers
              </div>
            </div>
            <div>
              <div className="font-theatre-serif text-3xl font-light text-theatre-gold-200">
                4
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-theatre-parchment-400 mt-1">
                Staged Masterworks
              </div>
            </div>
            <div>
              <div className="font-theatre-serif text-3xl font-light text-theatre-gold-200">
                6
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-theatre-parchment-400 mt-1">
                Professional Guilds
              </div>
            </div>
            <div>
              <div className="font-theatre-serif text-3xl font-light text-theatre-gold-200">
                100%
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-theatre-parchment-400 mt-1">
                Stem Isolation Coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Flow */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 2. Season Programme (Editorial Schedule) */}
        <SeasonProgramme items={seasonProgramme} />

        {/* 3. Company & Leadership Glimpse (Minimalist 3-Column) */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400 font-theatre-cinzel">
              Artistic Company
            </div>
            <h2 className="font-theatre-serif text-3xl sm:text-4xl text-theatre-parchment-50 font-normal">
              Voices & Leadership
            </h2>
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-theatre-parchment-400 font-sans">
              Auditioned section captains and guest soloists stewarding vocal excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {choralProfiles.map((p) => (
              <article
                key={p.id}
                className="theatre-card p-6 flex flex-col justify-between space-y-4 hover:border-theatre-gold-400/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-theatre-gold-500/15 pb-2 text-[11px]">
                    <span className="text-theatre-gold-300 font-semibold uppercase tracking-wider">
                      {p.voicePart}
                    </span>
                    <span className="text-theatre-parchment-400 capitalize">
                      {p.guildRole.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50">
                    {p.displayName}
                  </h3>

                  <p className="text-xs text-theatre-parchment-300 font-sans leading-relaxed line-clamp-3">
                    {p.bioPlaybill}
                  </p>

                  <div className="text-[11px] text-theatre-parchment-400 font-mono pt-1">
                    Compass: {p.vocalAttributes.rangeLowest} – {p.vocalAttributes.rangeHighest}
                  </div>
                </div>

                <div className="pt-4 border-t border-theatre-gold-500/15">
                  <Link
                    href={`/profile?id=${p.id}`}
                    className="text-xs uppercase tracking-wider text-theatre-gold-300 hover:text-theatre-gold-100 flex items-center justify-between"
                  >
                    <span>Open Vocal Dossier</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/team"
              className="theatre-btn-outline text-xs py-2.5 px-6"
            >
              Explore Full 6-Guild Company Directory & Compliance →
            </Link>
          </div>
        </section>

        {/* 4. Gateways to Dedicated Guild Rooms (Clean Minimalist Cards) */}
        <section className="border-t border-theatre-gold-500/15 pt-16 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400 font-theatre-cinzel">
              Sanctuary Portals
            </div>
            <h2 className="font-theatre-serif text-3xl sm:text-4xl text-theatre-parchment-50 font-normal">
              Guild Operations & Rehearsal Desks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="border border-theatre-gold-500/20 bg-theatre-dark-900/60 p-6 space-y-3 flex flex-col justify-between hover:border-theatre-gold-400/40 transition-colors">
              <div className="space-y-2">
                <span className="text-[10px] font-theatre-cinzel uppercase tracking-[0.25em] text-theatre-gold-400">
                  Vocalist Workstation
                </span>
                <h3 className="font-theatre-serif text-2xl text-theatre-parchment-100">
                  Choral Profile & Stems
                </h3>
                <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
                  Interactive vocal compass, isolated S/A/T/B practice stems player, pitch pipe reference (A440), and rehearsal ledger.
                </p>
              </div>
              <Link href="/profile" className="theatre-btn-gold text-[10px] py-2 text-center block mt-3">
                Open Profile Desk
              </Link>
            </article>

            <article className="border border-theatre-gold-500/20 bg-theatre-dark-900/60 p-6 space-y-3 flex flex-col justify-between hover:border-theatre-gold-400/40 transition-colors">
              <div className="space-y-2">
                <span className="text-[10px] font-theatre-cinzel uppercase tracking-[0.25em] text-theatre-gold-400">
                  Governance & Compliance
                </span>
                <h3 className="font-theatre-serif text-2xl text-theatre-parchment-100">
                  6-Guild Roster & Readiness
                </h3>
                <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
                  The complete 6-Guild taxonomy (Chorus America, ACDA, AGMA) and 4-phase monetization verification gates.
                </p>
              </div>
              <Link href="/team" className="theatre-btn-outline text-[10px] py-2 text-center block mt-3">
                View Company & Gates
              </Link>
            </article>

            <article className="border border-theatre-gold-500/20 bg-theatre-dark-900/60 p-6 space-y-3 flex flex-col justify-between hover:border-theatre-gold-400/40 transition-colors">
              <div className="space-y-2">
                <span className="text-[10px] font-theatre-cinzel uppercase tracking-[0.25em] text-theatre-gold-400">
                  Commissioning & Box Office
                </span>
                <h3 className="font-theatre-serif text-2xl text-theatre-parchment-100">
                  Services & Staged Offerings
                </h3>
                <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
                  Contract 60-voice symphonic chorus augmentation, commission vocal arrangements, or book masterclass clinics.
                </p>
              </div>
              <Link href="/services" className="theatre-btn-outline text-[10px] py-2 text-center block mt-3">
                Box Office Desk
              </Link>
            </article>
          </div>
        </section>

        {/* 5. Minimalist Patron Recognition Strip */}
        <section className="border border-theatre-gold-500/20 bg-theatre-dark-900/40 p-8 text-center space-y-3">
          <div className="text-[10px] font-theatre-cinzel uppercase tracking-[0.3em] text-theatre-gold-400">
            Patron Guild of the Choral Sanctuary
          </div>
          <h3 className="font-theatre-serif text-2xl text-theatre-parchment-100 font-normal">
            Sponsoring Rehearsal Equity & Score Preservation
          </h3>
          <p className="max-w-xl mx-auto text-xs text-theatre-parchment-400 leading-relaxed font-sans">
            Every contribution directly funds chorister uncompensated rehearsal stipends, robe care, and sacred choral library acquisitions.
          </p>
          <div className="pt-2">
            <Link href="/services" className="text-xs uppercase tracking-wider text-theatre-gold-300 hover:text-theatre-gold-100 font-semibold">
              Support the Guild Patron Tiers →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
