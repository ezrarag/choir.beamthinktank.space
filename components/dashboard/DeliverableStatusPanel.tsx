import type { Deliverable } from '@/types/domain'

interface DeliverableStatusPanelProps {
  deliverables: Deliverable[]
}

export default function DeliverableStatusPanel({ deliverables }: DeliverableStatusPanelProps) {
  return (
    <section className="theatre-card p-6 space-y-4">
      <div className="border-b border-theatre-gold-500/20 pb-3">
        <span className="text-[10px] font-theatre-cinzel uppercase tracking-[0.2em] text-theatre-gold-400">
          Repertoire Production
        </span>
        <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50 font-normal">
          Deliverables & Score Tracking
        </h3>
      </div>
      <div className="space-y-3">
        {deliverables.map((deliverable) => (
          <article
            key={deliverable.id}
            className="border border-theatre-gold-500/20 bg-theatre-dark-950/80 p-4 space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-theatre-parchment-100">
                {deliverable.title}
              </p>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-theatre-burgundy-600 bg-theatre-burgundy-950/60 text-theatre-gold-300">
                {deliverable.status}
              </span>
            </div>
            <p className="text-xs text-theatre-parchment-400 leading-relaxed">
              {deliverable.trackingNotes}
            </p>
            <div className="flex items-center justify-between text-[11px] text-theatre-parchment-500 pt-1 border-t border-theatre-gold-500/10">
              <span>Target Delivery: {deliverable.dueDate ?? 'TBD'}</span>
              <span>Req #{deliverable.requestId}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
