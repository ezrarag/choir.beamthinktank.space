import type { ServiceRequest } from '@/types/domain'

interface RequestStatusPanelProps {
  requests: ServiceRequest[]
}

export default function RequestStatusPanel({ requests }: RequestStatusPanelProps) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-lg font-semibold text-slate-100">Request Status</h3>
      <div className="mt-3 space-y-2">
        {requests.map((request) => (
          <article key={request.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
            <p className="text-sm font-medium text-slate-100">{request.organizationName ?? request.requesterId}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-amber-200">{request.status}</p>
            <p className="mt-1 text-xs text-slate-300">{request.notes}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
