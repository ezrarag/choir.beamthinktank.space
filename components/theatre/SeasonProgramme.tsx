import Link from 'next/link'
import type { SeasonProgrammeItem } from '@/lib/data/seed'

interface SeasonProgrammeProps {
  items: SeasonProgrammeItem[]
}

export default function SeasonProgramme({ items }: SeasonProgrammeProps) {
  return (
    <section id="programme" className="scroll-mt-24 space-y-6">
      {/* Theatrical Section Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400">
          <span>— ❖ —</span>
          <span>The 2026 / 2027 Playbill</span>
          <span>— ❖ —</span>
        </div>
        <h2 className="font-theatre-serif text-3xl sm:text-4xl text-theatre-parchment-50 font-normal tracking-tight">
          Current Repertoire & Staged Productions
        </h2>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-theatre-parchment-400 leading-relaxed font-sans">
          Rehearsal cycles, symphonic choral collaborations, and sacred masterworks scheduled across the sanctuary and proscenium halls.
        </p>
      </div>

      {/* Theatre WP Events Schedule List */}
      <div className="space-y-4">
        {items.map((item) => {
          const isRehearsal = item.status === 'In Rehearsal'
          const isPremiere = item.status === 'Premiere'

          return (
            <article
              key={item.id}
              className="theatre-card group hover:border-theatre-gold-400 transition-all duration-300 p-0 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Date Badge - Theatre WP framed calendar block */}
                <div className="flex lg:flex-col items-center justify-center p-4 lg:p-6 bg-theatre-dark-850/80 border-b lg:border-b-0 lg:border-r border-theatre-gold-500/20 lg:w-36 shrink-0 gap-2">
                  <span className="text-[10px] font-theatre-cinzel tracking-[0.25em] text-theatre-gold-400 uppercase">
                    {item.month}
                  </span>
                  <span className="font-theatre-serif text-3xl lg:text-4xl font-bold text-theatre-gold-200 tracking-tight">
                    {item.day}
                  </span>
                  <span className="text-[10px] text-theatre-parchment-500 tracking-widest">
                    {item.year}
                  </span>
                  <span className="hidden lg:inline-block mt-1 text-[9px] uppercase tracking-widest text-theatre-gold-500/70 border-t border-theatre-gold-500/20 pt-1">
                    {item.actNumber}
                  </span>
                </div>

                {/* Event Main Content */}
                <div className="flex-1 p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] uppercase tracking-[0.16em] px-2.5 py-0.5 border ${
                        isPremiere
                          ? 'border-theatre-gold-400/80 bg-theatre-gold-500/20 text-theatre-gold-200'
                          : isRehearsal
                          ? 'border-theatre-burgundy-600 bg-theatre-burgundy-900/50 text-theatre-gold-300'
                          : 'border-slate-700 bg-slate-900 text-slate-300'
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="text-[11px] text-theatre-parchment-400 font-medium">
                      {item.forces}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-theatre-serif text-xl sm:text-2xl text-theatre-parchment-50 group-hover:text-theatre-gold-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-theatre-serif italic text-theatre-gold-400/90 mt-0.5">
                      {item.composer}
                    </p>
                  </div>

                  <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
                    {item.subtitle}
                  </p>

                  {/* Hall & Call Times */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-[11px] text-theatre-parchment-400 border-t border-theatre-gold-500/15">
                    <div className="flex items-center gap-1.5">
                      <span className="text-theatre-gold-500">📍</span>
                      <span>{item.hall}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-theatre-gold-500">⏱</span>
                      <span className="text-theatre-gold-300 font-medium">{item.callTime}</span>
                      <span>({item.curtainTime})</span>
                    </div>
                  </div>
                </div>

                {/* Actions / Call Sheet Button */}
                <div className="p-5 lg:p-6 flex lg:flex-col items-center justify-center bg-theatre-dark-950/40 border-t lg:border-t-0 lg:border-l border-theatre-gold-500/20 lg:w-48 shrink-0 gap-3">
                  <Link
                    href="/profile"
                    className="theatre-btn-gold text-[10px] w-full text-center py-2.5"
                  >
                    {item.ticketStatus}
                  </Link>
                  <Link
                    href="/services"
                    className="theatre-btn-outline text-[10px] w-full text-center py-2 text-theatre-parchment-400 hover:text-theatre-gold-300"
                  >
                    Commission Works
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
