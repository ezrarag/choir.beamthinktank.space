import PageContainer from '@/components/layout/PageContainer'
import MediaRail from '@/components/media/MediaRail'
import SectionHeading from '@/components/shared/SectionHeading'
import { mediaRails } from '@/lib/data/seed'

export default function BrowsePage() {
  return (
    <PageContainer className="space-y-8">
      <SectionHeading
        title="Browse"
        subtitle="Foundation browse experience with category rails for featured performances, rehearsal, faculty, and opportunities."
      />
      {mediaRails.map((rail) => (
        <MediaRail key={rail.id} title={rail.title} items={rail.items} />
      ))}
    </PageContainer>
  )
}
