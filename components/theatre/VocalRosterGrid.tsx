import Link from 'next/link'
import type { ChoralParticipantProfile } from '@/types/domain'

interface VocalRosterGridProps {
  profiles: ChoralParticipantProfile[]
}

export default function VocalRosterGrid({ profiles }: VocalRosterGridProps) {
  return (
    <section id="roster" className="scroll-mt-24 space-y-8">
      {/* Theatrical Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400">
          <span>— ❖ —</span>
          <span>The Guild Company</span>
          <span>— ❖ —</span>
        </div>
        <h2 className="font-theatre-serif text-3xl sm:text-4xl text-theatre-parchment-50 font-normal tracking-tight">
          Vocal Artists & Choral Leadership
        </h2>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-theatre-parchment-400 leading-relaxed font-sans">
          Decoupled participant identities reflecting distinct vocal disciplines, range classifications, and repertoire commitments.
        </p>
      </div>

      {/* Grid of Playbill Artist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile) => {
          return (
            <article
              key={profile.id}
              className="theatre-card flex flex-col justify-between group hover:border-theatre-gold-400 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header Strip with Voice Classification & Role */}
                <div className="flex items-center justify-between border-b border-theatre-gold-500/20 pb-3">
                  <span className="voice-badge-satb">
                    {profile.voicePart}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-theatre-gold-500 font-semibold">
                    {profile.guildRole.replace('_', ' ')}
                  </span>
                </div>

                {/* Profile Identity & Headshot */}
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-theatre-gold-500/50 bg-theatre-dark-800">
                    {profile.headshotUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={profile.headshotUrl}
                        alt={profile.displayName}
                        className="h-full w-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-theatre-cinzel text-lg text-theatre-gold-400">
                        {profile.displayName.slice(0, 1)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50 group-hover:text-theatre-gold-200 transition-colors">
                      {profile.displayName}
                    </h3>
                    <p className="text-[11px] text-theatre-gold-400/90 font-medium">
                      {profile.universalRole}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-theatre-parchment-500">
                      Origin: {profile.originDomain.toUpperCase()}
                    </p>
                  </div>
                </div>

                {/* Playbill Bio */}
                <p className="text-xs text-theatre-parchment-300 leading-relaxed line-clamp-3 font-sans">
                  {profile.bioPlaybill}
                </p>

                {/* Vocal Attributes Strip */}
                <div className="space-y-2 rounded-none border border-theatre-gold-500/15 bg-theatre-dark-950/60 p-3 text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-theatre-parchment-400">Vocal Range</span>
                    <span className="font-mono text-theatre-gold-300 font-semibold">
                      {profile.vocalAttributes.rangeLowest} – {profile.vocalAttributes.rangeHighest} ({profile.vocalAttributes.tessitura})
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-theatre-parchment-400">Sight-Reading</span>
                    <span className="text-theatre-parchment-200 capitalize">
                      {profile.vocalAttributes.sightReadingProficiency.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="pt-1 flex flex-wrap gap-1">
                    {profile.vocalAttributes.languagesDiction.slice(0, 3).map((lang) => (
                      <span
                        key={lang}
                        className="text-[9px] border border-theatre-gold-500/20 bg-theatre-dark-900 px-1.5 py-0.5 text-theatre-parchment-400"
                      >
                        {lang.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Link */}
              <div className="pt-5 border-t border-theatre-gold-500/20 mt-4 flex items-center justify-between">
                <span className="text-[10px] tracking-wider text-theatre-gold-500">
                  {profile.repertoire.length} Works in Binder
                </span>
                <Link
                  href={`/profile?id=${profile.id}`}
                  className="text-xs uppercase tracking-[0.16em] text-theatre-gold-300 hover:text-theatre-gold-100 transition-colors font-semibold flex items-center gap-1"
                >
                  <span>Open Dossier</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
