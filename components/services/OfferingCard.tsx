import type { Offering } from '@/types/domain'

interface OfferingCardProps {
  offering: Offering
}

export default function OfferingCard({ offering }: OfferingCardProps) {
  return (
    <article className="theatre-card flex flex-col justify-between group hover:border-theatre-gold-400 transition-all duration-300">
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-theatre-gold-500/20 pb-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-theatre-gold-400 font-semibold font-theatre-cinzel">
            {offering.category}
          </span>
          <span className="font-theatre-serif text-base text-theatre-gold-300 font-bold">
            {offering.pricingModel === 'fixed' && offering.price
              ? `$${offering.price.toLocaleString()}`
              : offering.pricingModel === 'subscription' && offering.price
              ? `$${offering.price.toLocaleString()} / mo`
              : 'Commission / Custom'}
          </span>
        </div>

        <h3 className="font-theatre-serif text-2xl text-theatre-parchment-50 group-hover:text-theatre-gold-200 transition-colors">
          {offering.title}
        </h3>

        <p className="text-xs text-theatre-parchment-400 leading-relaxed font-sans">
          {offering.description}
        </p>

        <div className="pt-2 border-t border-theatre-gold-500/15">
          <div className="text-[10px] uppercase tracking-wider text-theatre-parchment-400 mb-1.5">
            Deliverable Milestones:
          </div>
          <ul className="space-y-1 text-xs text-theatre-parchment-300 font-sans">
            {offering.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-center gap-2">
                <span className="text-theatre-gold-500 text-xs">❖</span>
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-5 border-t border-theatre-gold-500/20 mt-4">
        <a
          href="#request-form"
          className="theatre-btn-gold text-[10px] w-full text-center py-2.5 block"
        >
          Select for Request
        </a>
      </div>
    </article>
  )
}
