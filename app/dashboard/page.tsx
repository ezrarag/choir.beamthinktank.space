import DeliverableStatusPanel from '@/components/dashboard/DeliverableStatusPanel'
import RequestStatusPanel from '@/components/dashboard/RequestStatusPanel'
import { deliverables, serviceRequests } from '@/lib/data/seed'

export const metadata = {
  title: 'Choral Operations Desk | BEAM Choral Guild',
  description: 'Track request lifecycle and repertoire deliverable milestones.',
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="text-center space-y-3 border-b border-theatre-gold-500/20 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-theatre-gold-400 font-theatre-cinzel">
          <span>— ❖ —</span>
          <span>Choral Operations & Lifecycle Desk</span>
          <span>— ❖ —</span>
        </div>
        <h1 className="font-theatre-serif text-4xl sm:text-5xl text-theatre-parchment-50 font-normal tracking-tight">
          Commission & Deliverable Ledger
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-theatre-parchment-300 leading-relaxed font-sans font-light">
          Mirrors the cross-domain engagement status model shared with Orchestra and Business, maintaining traceability across rehearsal schedules and score deliveries.
        </p>
      </div>

      <section className="grid gap-8 lg:grid-cols-2">
        <RequestStatusPanel requests={serviceRequests} />
        <DeliverableStatusPanel deliverables={deliverables} />
      </section>
    </main>
  )
}
