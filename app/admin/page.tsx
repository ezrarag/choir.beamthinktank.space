import PageContainer from '@/components/layout/PageContainer'
import SectionHeading from '@/components/shared/SectionHeading'

export default function AdminPage() {
  return (
    <PageContainer className="space-y-6">
      <SectionHeading
        title="Admin"
        subtitle="Placeholder for internal management tools. Next phase: role-gated operations for offerings, media, requests, and content rails."
      />

      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
        <p>Planned modules:</p>
        <ul className="mt-2 space-y-1">
          <li>- Offering catalog manager</li>
          <li>- Media rail and featured hero manager</li>
          <li>- Request triage and status workflow</li>
          <li>- Deliverable timeline tracking</li>
        </ul>
      </section>
    </PageContainer>
  )
}
