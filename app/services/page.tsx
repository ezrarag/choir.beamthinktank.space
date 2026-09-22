import ServiceRequestForm from '@/components/forms/ServiceRequestForm'
import OfferingCard from '@/components/services/OfferingCard'
import { offerings } from '@/lib/data/seed'

export const metadata = {
  title: 'Box Office & Services | BEAM Choral Guild',
  description: 'Commission choral ensembles, book masterclasses, and request studio vocal tracking packages.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Theatrical Page Header */}
      <div className="text-center space-y-3 border-b border-theatre-gold-500/20 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400 font-theatre-cinzel">
          <span>— ❖ —</span>
          <span>Guild Box Office & Repertoire Desk</span>
          <span>— ❖ —</span>
        </div>
        <h1 className="font-theatre-serif text-4xl sm:text-5xl text-theatre-parchment-50 font-normal tracking-tight">
          Choral Commissioning & Staged Offerings
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-theatre-parchment-300 leading-relaxed font-sans font-light">
          Whether you require a full 60-voice symphonic chorus for orchestral masterworks, a vocal chamber duo, or studio backing arrangements, our guild offers turnkey staging, auditioned choristers, and rehearsal management.
        </p>
      </div>

      {/* Offerings Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offerings.map((offering) => (
          <OfferingCard key={offering.id} offering={offering} />
        ))}
      </section>

      {/* Commission Request Form */}
      <div className="max-w-3xl mx-auto">
        <ServiceRequestForm offerings={offerings} />
      </div>
    </main>
  )
}
