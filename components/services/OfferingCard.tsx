import type { Offering } from '@/types/domain'

interface OfferingCardProps {
  offering: Offering
}

export default function OfferingCard({ offering }: OfferingCardProps) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-slate-100">{offering.title}</h3>
        <span className="rounded-full border border-amber-300/35 px-2 py-0.5 text-xs uppercase text-amber-200">
          {offering.category}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{offering.description}</p>
      <p className="mt-3 text-xs text-slate-400">
        Pricing: {offering.pricingModel === 'fixed' && offering.price ? `$${offering.price}` : offering.pricingModel}
      </p>
      <ul className="mt-3 space-y-1 text-xs text-slate-300">
        {offering.deliverables.map((deliverable) => (
          <li key={deliverable}>- {deliverable}</li>
        ))}
      </ul>
    </article>
  )
}
