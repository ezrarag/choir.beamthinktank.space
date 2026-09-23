'use client'
import { useState } from 'react'
import {
  CHORAL_ROLE_DEFINITIONS,
  getRolesByGuild,
} from '@/lib/api/choralMonetizationTimeline'
import { CHORAL_GUILDS_META, type ChoralGuildId } from '@/types/choralTaxonomy'

const GUILDS_LIST: ChoralGuildId[] = [
  'artistic_performance',
  'composition_library',
  'production_engineering',
  'business_operations',
  'vocal_health_education',
  'originator_client',
]

// Assigned personnel map linking real BEAM participant identities to choral roles
const CURRENT_PERSONNEL_MAP: Record<string, { name: string; domain: string; note: string }> = {
  choral_director_conductor: {
    name: 'Dr. Agualay',
    domain: 'home',
    note: 'DMA Choral Conducting · Lead Maestro & Pedagogue',
  },
  tenor_section_leader: {
    name: 'Paul',
    domain: 'business',
    note: 'Tenor 1 & Choral Vocal Producer (Cross-Domain)',
  },
  bass_section_leader: {
    name: 'Ezra Haugabrooks',
    domain: 'orchestra',
    note: 'Bass-Baritone & Sectional Intonation Anchor',
  },
  vocal_arranger: {
    name: 'Donte',
    domain: 'orchestra',
    note: 'Polyphonic Voicing & Choral Arranging',
  },
  track_originator_producer: {
    name: 'Paul',
    domain: 'business',
    note: 'Contemporary Producer Commissioning Vocal Layers',
  },
  symphonic_orchestra_client: {
    name: 'BDSO (Black Diaspora Symphony)',
    domain: 'orchestra',
    note: 'Contracting 60-voice SATB Chorus for Margaret Bonds',
  },
}

export default function GuildDirectory() {
  const [selectedGuild, setSelectedGuild] = useState<ChoralGuildId>('artistic_performance')
  const activeMeta = CHORAL_GUILDS_META[selectedGuild]
  const activeRoles = getRolesByGuild(selectedGuild)

  return (
    <section className="theatre-card p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-theatre-gold-500/20 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-theatre-gold-400 font-theatre-cinzel">
            <span>Organizational Architecture</span>
            <span>·</span>
            <span>Professional Choral Guild Taxonomy</span>
          </div>
          <h2 className="font-theatre-serif text-2xl sm:text-3xl text-theatre-parchment-50 font-normal">
            The 6-Guild Company Directory
          </h2>
          <p className="text-xs text-theatre-parchment-400 mt-1 font-sans">
            Every production requires clearly designated personnel across 6 professional vocal guilds before transacting.
          </p>
        </div>

        {/* Governing Standards Pill */}
        <div className="flex flex-wrap items-center gap-1.5 bg-theatre-dark-950 px-3 py-1.5 border border-theatre-gold-500/20 text-[10px] text-theatre-parchment-400">
          <span className="text-theatre-gold-400 font-semibold uppercase">Standards:</span>
          {activeMeta.governingStandards.map((std) => (
            <span key={std} className="border border-slate-700 px-1.5 py-0.2 text-theatre-parchment-300">
              {std}
            </span>
          ))}
        </div>
      </div>

      {/* Guild Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {GUILDS_LIST.map((guildId) => {
          const meta = CHORAL_GUILDS_META[guildId]
          const isSelected = selectedGuild === guildId

          return (
            <button
              key={guildId}
              onClick={() => setSelectedGuild(guildId)}
              className={`p-3 text-left border transition-all duration-200 ${
                isSelected
                  ? 'border-theatre-gold-400 bg-theatre-dark-850 text-theatre-gold-200 shadow'
                  : 'border-theatre-gold-500/20 bg-theatre-dark-950/60 text-theatre-parchment-300 hover:border-theatre-gold-500/50'
              }`}
            >
              <div className="font-theatre-cinzel text-xs font-semibold truncate">
                {meta.shortLabel}
              </div>
              <div className="text-[10px] text-theatre-parchment-500 mt-0.5 truncate">
                {getRolesByGuild(guildId).length} Roles
              </div>
            </button>
          )
        })}
      </div>

      {/* Guild Overview Banner */}
      <div className="border border-theatre-gold-500/25 bg-theatre-dark-950/80 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-theatre-serif text-xl text-theatre-parchment-100 font-semibold">
            {activeMeta.name}
          </h3>
          <p className="text-xs text-theatre-parchment-400 mt-0.5 leading-relaxed font-sans">
            {activeMeta.description}
          </p>
        </div>
      </div>

      {/* Role Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {activeRoles.map((role) => {
          const assigned = CURRENT_PERSONNEL_MAP[role.id]

          return (
            <article
              key={role.id}
              className="border border-theatre-gold-500/20 bg-theatre-dark-900/90 p-5 space-y-3 flex flex-col justify-between hover:border-theatre-gold-400/50 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-theatre-cinzel tracking-wider text-theatre-gold-400 border border-theatre-gold-500/30 px-2 py-0.5 uppercase">
                    {role.governingBody}
                  </span>
                  {assigned && (
                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-theatre-gold-400/80 bg-theatre-gold-500/15 text-theatre-gold-300 font-semibold">
                      Assigned: {assigned.name.split(' ')[0]}
                    </span>
                  )}
                </div>

                <h4 className="font-theatre-serif text-xl text-theatre-parchment-50 font-normal">
                  {role.title}
                </h4>

                <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
                  {role.description}
                </p>

                {/* Key Responsibilities */}
                <div className="pt-2 border-t border-theatre-gold-500/10">
                  <div className="text-[10px] uppercase tracking-wider text-theatre-parchment-500 mb-1">
                    Operational Scope:
                  </div>
                  <ul className="space-y-0.5 text-xs text-theatre-parchment-300 font-sans">
                    {role.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-center gap-1.5">
                        <span className="text-theatre-gold-500 text-[10px]">❖</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Personnel Assignment & Compliance Box */}
              <div className="pt-3 border-t border-theatre-gold-500/15 text-[11px] space-y-1">
                {assigned ? (
                  <div className="bg-theatre-dark-950 p-2 border border-theatre-gold-500/20 flex items-center justify-between">
                    <div>
                      <span className="text-theatre-gold-300 font-semibold">{assigned.name}</span>
                      <span className="text-theatre-parchment-500 text-[10px] ml-1">({assigned.domain})</span>
                    </div>
                    <span className="text-[9px] text-theatre-parchment-400 truncate max-w-[150px]">
                      {assigned.note}
                    </span>
                  </div>
                ) : (
                  <div className="text-theatre-parchment-500 text-[10px] italic">
                    Open Call / Audition Cleared Pool
                  </div>
                )}

                <div className="text-[10px] text-theatre-parchment-500 pt-1">
                  Required: {role.complianceRequirements.join(', ')}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
