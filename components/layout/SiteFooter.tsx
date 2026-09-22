import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t-2 border-theatre-gold-500/40 bg-theatre-dark-950 text-theatre-parchment-300">
      {/* Playbill Colophon Header */}
      <div className="border-b border-theatre-gold-500/20 bg-theatre-dark-900/60 py-6 text-center">
        <div className="font-theatre-cinzel text-xs uppercase tracking-[0.35em] text-theatre-gold-400">
          BEAM Choral Guild & Vocal Proscenium
        </div>
        <p className="mt-1 font-theatre-serif text-sm italic text-theatre-parchment-400">
          &ldquo;Ex Voce Unitas &mdash; Through Voice, Memory &amp; Living Sacred Tradition&rdquo;
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Sanctuary & Venue */}
          <div className="space-y-3">
            <h4 className="font-theatre-cinzel text-xs uppercase tracking-[0.25em] text-theatre-gold-300">
              Sanctuary & Stages
            </h4>
            <p className="text-xs text-theatre-parchment-400 leading-relaxed">
              Main Choral Sanctuary & Proscenium Hall<br />
              Steinway Choral Studio Suites A & B<br />
              Liturgical Choral Residency Hall
            </p>
            <p className="text-[11px] text-theatre-gold-500/80">
              Call Desk: (404) 555-VOX1<br />
              rehearsals@beamthinktank.space
            </p>
          </div>

          {/* Col 2: Season & Voices */}
          <div className="space-y-3">
            <h4 className="font-theatre-cinzel text-xs uppercase tracking-[0.25em] text-theatre-gold-300">
              Choral Season 2026
            </h4>
            <ul className="space-y-1.5 text-xs text-theatre-parchment-400">
              <li>Margaret Bonds: <span className="italic">Ballad of the Brown King</span></li>
              <li>R. Nathaniel Dett: <span className="italic">The Chariot Jubilee</span></li>
              <li>Adolphus Hailstork: <span className="italic">Shout for Joy</span></li>
              <li>Undine Smith Moore: <span className="italic">We Shall Walk in Peace</span></li>
            </ul>
          </div>

          {/* Col 3: Vocal Sections & Stems */}
          <div className="space-y-3">
            <h4 className="font-theatre-cinzel text-xs uppercase tracking-[0.25em] text-theatre-gold-300">
              Vocal Desk & CV
            </h4>
            <ul className="space-y-1.5 text-xs text-theatre-parchment-400">
              <li>
                <Link href="/profile" className="hover:text-theatre-gold-300 transition-colors">
                  Choral Profile & Stems Player
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-theatre-gold-300 transition-colors">
                  Audition for SATB Roster
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-theatre-gold-300 transition-colors">
                  Commission Symphonic Chorus
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-theatre-gold-300 transition-colors">
                  Participant Request Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: BEAM Ecosystem Domains */}
          <div className="space-y-3">
            <h4 className="font-theatre-cinzel text-xs uppercase tracking-[0.25em] text-theatre-gold-300">
              BEAM Federated Domains
            </h4>
            <p className="text-[11px] text-theatre-parchment-400 leading-relaxed">
              Clean architectural separation across guild ecosystems:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] uppercase tracking-wider">
              <span className="border border-theatre-gold-500/30 px-2 py-0.5 text-theatre-gold-300 bg-theatre-dark-900">
                Choir (Voice)
              </span>
              <span className="border border-slate-700/60 px-2 py-0.5 text-slate-400">
                Orchestra (Strings)
              </span>
              <span className="border border-slate-700/60 px-2 py-0.5 text-slate-400">
                Band (Live Touring)
              </span>
              <span className="border border-slate-700/60 px-2 py-0.5 text-slate-400">
                Business (Engagements)
              </span>
              <span className="border border-slate-700/60 px-2 py-0.5 text-slate-400">
                Forge (Fabrication)
              </span>
              <span className="border border-slate-700/60 px-2 py-0.5 text-slate-400">
                Home (Identity)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="mt-10 border-t border-theatre-gold-500/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-theatre-parchment-500 gap-3">
          <p>© 2026 BEAM Choral Guild. All rights reserved. Registered Arts & Culture Foundation.</p>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-theatre-gold-400/80">
            <span>Uncompensated Rehearsal Recognition</span>
            <span>·</span>
            <span>BEAM Coin Ledger Active</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
