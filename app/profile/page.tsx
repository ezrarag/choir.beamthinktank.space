import ChoralProfileHub from '@/components/profile/ChoralProfileHub'

export const metadata = {
  title: 'Vocal CV & Choral Profile | BEAM Choral Guild',
  description: 'Manage voice classification (SATB), vocal range, sectional rehearsal stems, and liturgical repertoire commitments.',
}

export default function ProfilePage({
  searchParams,
}: {
  searchParams?: { id?: string }
}) {
  const profileId = searchParams?.id || 'profile-paul-choral'

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Top Breadcrumb & Return Marquee */}
      <div className="flex items-center justify-between border-b border-theatre-gold-500/20 pb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-theatre-gold-400 font-theatre-cinzel">
          <span>Choral Guild</span>
          <span>/</span>
          <span className="text-theatre-parchment-200">Vocal Artist Dossier & Rehearsal Desk</span>
        </div>

        <a
          href="/"
          className="text-xs uppercase tracking-widest text-theatre-parchment-400 hover:text-theatre-gold-300 transition-colors flex items-center gap-1.5"
        >
          <span>✕</span>
          <span>Return to Stage</span>
        </a>
      </div>

      <ChoralProfileHub initialProfileId={profileId} />
    </main>
  )
}
