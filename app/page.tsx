import Link from 'next/link'
import SeasonProgramme from '@/components/theatre/SeasonProgramme'
import VocalRosterGrid from '@/components/theatre/VocalRosterGrid'
import ChoralProfileHub from '@/components/profile/ChoralProfileHub'
import {
  choralProfiles,
  offerings,
  seasonProgramme,
} from '@/lib/data/seed'

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Grand Theatrical Hero / Marquee (Theatre WP Format) */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-theatre-gold-500/30 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Ambient Stage Backdrop Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter contrast-125"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark-950 via-theatre-dark-950/85 to-theatre-burgundy-950/40" />

        {/* Theatrical Playbill Marquee Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-12 pb-16">
          {/* Season Stamp */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-theatre-gold-500/50 bg-theatre-dark-900/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-theatre-gold-400 animate-pulse" />
            <span className="font-theatre-cinzel text-xs uppercase tracking-[0.3em] text-theatre-gold-300">
              Act I · Season 2026 / 2027
            </span>
            <span className="hidden sm:inline text-theatre-gold-600">|</span>
            <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-theatre-parchment-300">
              The Living Vocal Sanctuary
            </span>
          </div>

          {/* Grand Marquee Title */}
          <h1 className="font-theatre-serif text-4xl sm:text-6xl md:text-7xl font-normal text-theatre-parchment-50 tracking-tight leading-[1.08]">
            Where Sacred Liturgy Meets <br className="hidden sm:inline" />
            <span className="italic font-light text-theatre-gold-300">
              Symphonic Choral Art
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-theatre-parchment-300 leading-relaxed font-sans font-light">
            The dedicated vocal sanctuary of the BEAM ecosystem. We preserve and perform the African American sacred choral cannon, polyphonic motets, and modern vocal works—grounded in decoupled participant identity and rehearsal honorariums.
          </p>

          {/* Marquee Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/profile" className="theatre-btn-gold">
              Explore Vocal Profile & Stems
            </Link>
            <a href="#programme" className="theatre-btn-outline">
              Season Programme
            </a>
            <Link href="/join" className="theatre-btn-outline">
              Audition for SATB Section
            </Link>
          </div>

          {/* Playbill Ornamental Divider */}
          <div className="pt-6">
            <div className="theatre-divider-line">
              <span className="font-theatre-cinzel text-theatre-gold-400 tracking-widest text-xs">
                PROSCENIUM & REHEARSAL SANCTUARY
              </span>
            </div>
          </div>

          {/* Theatre WP Key Ticker Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 text-center max-w-4xl mx-auto">
            <div className="border-r border-theatre-gold-500/20 last:border-r-0 py-2">
              <div className="font-theatre-serif text-3xl font-bold text-theatre-gold-300">
                60
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-theatre-parchment-400">
                SATB Choristers
              </div>
            </div>
            <div className="border-r border-theatre-gold-500/20 last:border-r-0 py-2">
              <div className="font-theatre-serif text-3xl font-bold text-theatre-gold-300">
                4
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-theatre-parchment-400">
                Staged Masterworks
              </div>
            </div>
            <div className="border-r border-theatre-gold-500/20 last:border-r-0 py-2">
              <div className="font-theatre-serif text-3xl font-bold text-theatre-gold-300">
                340+
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-theatre-parchment-400">
                Uncompensated Rehearsal Hrs
              </div>
            </div>
            <div className="py-2">
              <div className="font-theatre-serif text-3xl font-bold text-theatre-gold-300">
                100%
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-theatre-parchment-400">
                Isolated Stem Coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 2. Theatre WP Season Programme & Schedule */}
        <SeasonProgramme items={seasonProgramme} />

        {/* 3. Theatrical Company Roster (Chorister Playbill Cards) */}
        <VocalRosterGrid profiles={choralProfiles} />

        {/* 4. The Choral Profile & Sectional Stems Spotlight */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400">
              <span>— ❖ —</span>
              <span>Architectural Precedent</span>
              <span>— ❖ —</span>
            </div>
            <h2 className="font-theatre-serif text-3xl sm:text-4xl text-theatre-parchment-50 font-normal tracking-tight">
              Interactive Choral Profile & Vocal Dossier
            </h2>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-theatre-parchment-400 leading-relaxed font-sans">
              Test how Paul, Ezra, and Dr. Agualay maintain their distinct vocal voice-parts, pitch ranges, and sectional rehearsal tracks without collapsing into the Orchestra or Band schemas.
            </p>
          </div>

          <ChoralProfileHub initialProfileId="profile-paul-choral" />
        </section>

        {/* 5. Box Office & Choral Commissioning Desk */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400">
              <span>— ❖ —</span>
              <span>Box Office & Services</span>
              <span>— ❖ —</span>
            </div>
            <h2 className="font-theatre-serif text-3xl sm:text-4xl text-theatre-parchment-50 font-normal tracking-tight">
              Symphonic Chorus Augmentation & Commissioning
            </h2>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-theatre-parchment-400 leading-relaxed font-sans">
              Contract the full ensemble for orchestral collaborations, studio backing tracking, or institutional masterclasses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.slice(0, 3).map((offering) => (
              <article
                key={offering.id}
                className="theatre-card flex flex-col justify-between group hover:border-theatre-gold-400 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-theatre-gold-500/20 pb-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-theatre-gold-400 font-semibold">
                      {offering.category}
                    </span>
                    <span className="font-theatre-serif text-base text-theatre-gold-300">
                      {offering.price ? `$${offering.price.toLocaleString()}` : 'Custom Scope'}
                    </span>
                  </div>

                  <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50 group-hover:text-theatre-gold-200 transition-colors">
                    {offering.title}
                  </h3>

                  <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
                    {offering.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-[10px] uppercase tracking-wider text-theatre-parchment-400 mb-1.5">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-1 text-xs text-theatre-parchment-300 font-sans">
                      {offering.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-center gap-2">
                          <span className="text-theatre-gold-500 text-xs">❖</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-theatre-gold-500/20 mt-4">
                  <Link
                    href={`/services?offering=${offering.id}`}
                    className="theatre-btn-gold text-[10px] w-full text-center py-2.5 block"
                  >
                    Request Package
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. Patron & Donors Guild Tiers */}
        <section className="border border-theatre-gold-500/40 bg-theatre-dark-900/90 p-8 text-center space-y-6 relative">
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400 font-theatre-cinzel">
              Patron Guild of the Choral Sanctuary
            </div>
            <h2 className="font-theatre-serif text-3xl sm:text-4xl text-theatre-parchment-50 font-normal">
              Support Rehearsal Equity & Vocal Preservation
            </h2>
            <p className="text-xs sm:text-sm text-theatre-parchment-300 leading-relaxed font-sans">
              All contributions fund uncompensated rehearsal honorariums, choral sheet music acquisition, and vocal health clinics for our choristers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-2">
            <div className="border border-theatre-gold-500/20 bg-theatre-dark-950 p-4">
              <div className="text-[10px] uppercase tracking-wider text-theatre-parchment-400">Chorister Circle</div>
              <div className="font-theatre-serif text-xl font-bold text-theatre-gold-300 mt-1">$25 / mo</div>
              <div className="text-[10px] text-theatre-parchment-500 mt-1">Rehearsal score sponsor</div>
            </div>
            <div className="border border-theatre-gold-500/20 bg-theatre-dark-950 p-4">
              <div className="text-[10px] uppercase tracking-wider text-theatre-parchment-400">Section Captain</div>
              <div className="font-theatre-serif text-xl font-bold text-theatre-gold-300 mt-1">$100 / mo</div>
              <div className="text-[10px] text-theatre-parchment-500 mt-1">Sectional stem production</div>
            </div>
            <div className="border border-theatre-gold-500/40 bg-theatre-dark-850 p-4 shadow-sm">
              <div className="text-[10px] uppercase tracking-wider text-theatre-gold-400 font-semibold">Sanctuary Benefactor</div>
              <div className="font-theatre-serif text-xl font-bold text-theatre-gold-200 mt-1">$500 / mo</div>
              <div className="text-[10px] text-theatre-parchment-400 mt-1">Full concert robe endowment</div>
            </div>
            <div className="border border-theatre-gold-500/20 bg-theatre-dark-950 p-4">
              <div className="text-[10px] uppercase tracking-wider text-theatre-parchment-400">Maestro Society</div>
              <div className="font-theatre-serif text-xl font-bold text-theatre-gold-300 mt-1">$2,500+</div>
              <div className="text-[10px] text-theatre-parchment-500 mt-1">Symphonic commission lead</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
