import PageContainer from '@/components/layout/PageContainer'
import DeliverableStatusPanel from '@/components/dashboard/DeliverableStatusPanel'
import RequestStatusPanel from '@/components/dashboard/RequestStatusPanel'
import SectionHeading from '@/components/shared/SectionHeading'
import { deliverables, serviceRequests } from '@/lib/data/seed'

export default function DashboardPage() {
  return (
    <PageContainer className="space-y-8">
      <SectionHeading
        title="Dashboard"
        subtitle="Mock dashboard shell for request and deliverable tracking. This maps to the same lifecycle concepts used in orchestra."
      />

      <section className="grid gap-4 lg:grid-cols-2">
        <RequestStatusPanel requests={serviceRequests} />
        <DeliverableStatusPanel deliverables={deliverables} />
      </section>
    </PageContainer>
  )
}
