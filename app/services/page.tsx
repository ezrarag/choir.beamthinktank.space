import PageContainer from '@/components/layout/PageContainer'
import ServiceRequestForm from '@/components/forms/ServiceRequestForm'
import OfferingCard from '@/components/services/OfferingCard'
import SectionHeading from '@/components/shared/SectionHeading'
import { offerings } from '@/lib/data/seed'

export default function ServicesPage() {
  return (
    <PageContainer className="space-y-8">
      <SectionHeading
        title="Services"
        subtitle="Browse offerings, select service packages, and submit requests using a mock flow while backend wiring is in progress."
      />

      <section className="grid gap-4 md:grid-cols-2">
        {offerings.map((offering) => (
          <OfferingCard key={offering.id} offering={offering} />
        ))}
      </section>

      <ServiceRequestForm offerings={offerings} />
    </PageContainer>
  )
}
