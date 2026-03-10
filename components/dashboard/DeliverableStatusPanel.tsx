import type { Deliverable } from '@/types/domain'

interface DeliverableStatusPanelProps {
  deliverables: Deliverable[]
}

export default function DeliverableStatusPanel({ deliverables }: DeliverableStatusPanelProps) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-lg font-semibold text-slate-100">Deliverable Tracking</h3>
      <div className="mt-3 space-y-2">
        {deliverables.map((deliverable) => (
          <article key={deliverable.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
            <p className="text-sm font-medium text-slate-100">{deliverable.title}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-amber-200">{deliverable.status}</p>
            <p className="mt-1 text-xs text-slate-300">Due: {deliverable.dueDate ?? 'TBD'}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
