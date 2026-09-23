import GuildDirectory from '@/components/theatre/GuildDirectory'
import ChoralMonetizationTracker from '@/components/monetization/ChoralMonetizationTracker'

export const metadata = {
  title: 'Choral Guild Directory & Compliance | BEAM Choral Guild',
  description: 'The 6-Guild Choral Company Taxonomy (Chorus America, ACDA, AGMA) and 4-Phase Monetization Readiness Engine.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-theatre-gold-500/20 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400 font-theatre-cinzel">
          <span>— ❖ —</span>
          <span>Institutional Governance & Personnel</span>
          <span>— ❖ —</span>
        </div>
        <h1 className="font-theatre-serif text-4xl sm:text-5xl text-theatre-parchment-50 font-normal tracking-tight">
          The 6-Guild Company & Compliance
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-theatre-parchment-300 leading-relaxed font-sans font-light">
          An interconnected multi-disciplinary vocal organization grounded in professional industry standards (Chorus America, ACDA, AGMA, MOLA, GMWA). Enforcing prerequisite business gates before commercial execution.
        </p>
      </div>

      {/* 1. Monetization Readiness Engine */}
      <ChoralMonetizationTracker />

      {/* 2. 6-Guild Interactive Taxonomy Directory */}
      <GuildDirectory />
    </main>
  )
}
