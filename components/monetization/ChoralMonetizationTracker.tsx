'use client'

import { useState } from 'react'
import {
  CHORAL_COMPLIANCE_BADGES,
  checkChoralMonetizationReadiness,
  getBadgesByPhase,
} from '@/lib/api/choralMonetizationTimeline'
import type { MonetizationPhase } from '@/types/choralTaxonomy'

const PHASES_CONFIG: {
  id: MonetizationPhase
  step: string
  title: string
  moneyUnlocked: string
  description: string
}[] = [
  {
    id: 'phase_0_entity',
    step: 'Phase 0',
    title: 'Entity & Financial Foundation',
    moneyUnlocked: 'Direct Donations & Seed Sponsorships',
    description: 'Incorporation, tax-exempt EIN, and Stripe Connect merchant accounts.',
  },
  {
    id: 'phase_1_compliance',
    step: 'Phase 1',
    title: 'Compliance & Licensing Framework',
    moneyUnlocked: 'Institutional Booking Deposits & Grants',
    description: 'AGMA-aligned work rules, CCLI/ASCAP score clearances, and standard contracts.',
  },
  {
    id: 'phase_2_roster',
    step: 'Phase 2',
    title: 'Roster & Media Onboarding',
    moneyUnlocked: 'Commercial Retainers & Studio Bookings',
    description: '100% W-9 intake, Robe fitting, and signed audio/visual media releases.',
  },
  {
    id: 'phase_3_revenue',
    step: 'Phase 3',
    title: 'Live Choral Monetization',
    moneyUnlocked: 'Public Tickets, Stem Sales & Royalty Splits',
    description: 'Public Stripe checkout, isolated practice stems, and producer/arranger split sheets.',
  },
]

export default function ChoralMonetizationTracker() {
  const [activePhase, setActivePhase] = useState<MonetizationPhase>('phase_0_entity')
  const readiness = checkChoralMonetizationReadiness()
  const currentBadges = getBadgesByPhase(activePhase)

  return (
    <section className="theatre-card p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-theatre-gold-500/20 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-theatre-gold-400 font-theatre-cinzel">
            <span>Governance & Revenue Gates</span>
            <span>·</span>
            <span>Chorus America Standards</span>
          </div>
          <h2 className="font-theatre-serif text-2xl sm:text-3xl text-theatre-parchment-50 font-normal">
            Monetization Readiness Engine
          </h2>
          <p className="text-xs text-theatre-parchment-400 mt-1 font-sans">
            Strict business prerequisites must be verified before the guild can legally invoice clients or distribute public payouts.
          </p>
        </div>

        {/* Global Progress Dial */}
        <div className="flex items-center gap-3 bg-theatre-dark-950/80 border border-theatre-gold-500/30 px-4 py-2 shrink-0">
          <div className="text-right">
            <div className="text-xs font-semibold text-theatre-gold-300">
              {readiness.percentage}% Complete
            </div>
            <div className="text-[10px] text-theatre-parchment-400">
              {readiness.verified} of {readiness.total} Gates Verified
            </div>
          </div>
          <div className="h-8 w-8 rounded-full border-2 border-theatre-gold-400/80 flex items-center justify-center font-theatre-cinzel text-xs text-theatre-gold-300 font-bold">
            ✓
          </div>
        </div>
      </div>

      {/* 4-Phase Stepper Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {PHASES_CONFIG.map((phase) => {
          const isSelected = activePhase === phase.id
          const badges = getBadgesByPhase(phase.id)
          const allVerified = badges.every((b) => b.status === 'verified')

          return (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`text-left p-3.5 border transition-all duration-200 ${
                isSelected
                  ? 'border-theatre-gold-400 bg-theatre-dark-850 shadow-md'
                  : 'border-theatre-gold-500/20 bg-theatre-dark-950/60 hover:border-theatre-gold-500/40'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider mb-1">
                <span className="font-theatre-cinzel text-theatre-gold-400 font-semibold">
                  {phase.step}
                </span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 border ${
                    allVerified
                      ? 'border-theatre-gold-400 text-theatre-gold-300 bg-theatre-gold-500/10'
                      : 'border-slate-700 text-slate-400'
                  }`}
                >
                  {allVerified ? 'VERIFIED' : 'PENDING'}
                </span>
              </div>

              <div className="font-theatre-serif text-sm font-semibold text-theatre-parchment-100 truncate">
                {phase.title}
              </div>

              <div className="text-[10px] text-theatre-gold-400/80 mt-1 truncate">
                Unlocks: {phase.moneyUnlocked}
              </div>
            </button>
          )
        })}
      </div>

      {/* Phase Details & Active Badges */}
      <div className="border border-theatre-gold-500/25 bg-theatre-dark-950/80 p-5 space-y-4">
        {(() => {
          const currentConfig = PHASES_CONFIG.find((p) => p.id === activePhase)!
          return (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-theatre-gold-500/15 pb-3">
                <div>
                  <span className="text-[10px] font-theatre-cinzel uppercase tracking-[0.2em] text-theatre-gold-400">
                    {currentConfig.step} Requirements
                  </span>
                  <h3 className="font-theatre-serif text-xl text-theatre-parchment-50 font-semibold">
                    {currentConfig.title}
                  </h3>
                </div>
                <div className="text-xs text-theatre-gold-300 bg-theatre-dark-900 border border-theatre-gold-500/30 px-3 py-1">
                  Revenue Unlocked: <strong>{currentConfig.moneyUnlocked}</strong>
                </div>
              </div>

              {/* Badge List */}
              <div className="grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-3">
                {currentBadges.map((badge) => {
                  const isVerified = badge.status === 'verified'

                  return (
                    <div
                      key={badge.id}
                      className="border border-theatre-gold-500/20 bg-theatre-dark-900 p-3.5 space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 border ${
                              isVerified
                                ? 'border-theatre-gold-400/80 text-theatre-gold-300 bg-theatre-gold-500/15'
                                : 'border-amber-600/60 text-amber-300 bg-amber-950/40'
                            }`}
                          >
                            {badge.status}
                          </span>
                          <span className="text-[10px] font-mono text-theatre-parchment-500">
                            {badge.verifiedDate ?? 'Awaiting'}
                          </span>
                        </div>

                        <div className="font-theatre-serif text-base text-theatre-parchment-100 font-semibold pt-1">
                          {badge.label}
                        </div>

                        <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
                          {badge.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-theatre-gold-500/15 text-[10px] text-theatre-parchment-400 flex items-center justify-between">
                        <span>Required Signatory:</span>
                        <span className="text-theatre-gold-400 font-mono">
                          {badge.signatoryName ?? badge.requiredRole}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })()}
      </div>
    </section>
  )
}
