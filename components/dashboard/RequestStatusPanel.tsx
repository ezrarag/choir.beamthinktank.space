import type { ServiceRequest } from '@/types/domain'

interface RequestStatusPanelProps {
  requests: ServiceRequest[]
}

export default function RequestStatusPanel({ requests }: RequestStatusPanelProps) {
  return (
    <section className="theatre-card p-6 space-y-4">
      <div className="border-b border-theatre-gold-500/20 pb-3">
        <span className="text-[10px] font-theatre-cinzel uppercase tracking-[0.2em] text-theatre-gold-400">
          Choral Intake Desk
        </span>
        <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50 font-normal">
          Active Service Requests
        </h3>
      </div>
      <div className="space-y-3">
        {requests.map((request) => (
          <article
            key={request.id}
            className="border border-theatre-gold-500/20 bg-theatre-dark-950/80 p-4 space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-theatre-parchment-100">
                {request.organizationName ?? request.requesterId}
              </p>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-theatre-gold-500/40 bg-theatre-gold-500/10 text-theatre-gold-300">
                {request.status}
              </span>
            </div>
            <p className="text-xs text-theatre-parchment-400 leading-relaxed">{request.notes}</p>
            <div className="flex items-center justify-between text-[11px] text-theatre-parchment-500 pt-1 border-t border-theatre-gold-500/10">
              <span>Budget: ${request.budget?.toLocaleString()}</span>
              <span>Model: {request.frequency}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
