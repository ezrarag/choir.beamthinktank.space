export type ProgramType = 'orchestra' | 'chorus'

export type Program = {
  id: string
  name: string
  slug: string
  type: ProgramType
  description: string
  branding: {
    primaryColor: string
    accentColor: string
    fontHeading: string
    fontBody: string
  }
}

export type User = {
  id: string
  name: string
  email: string
  role: 'visitor' | 'participant' | 'faculty' | 'rep' | 'admin'
  organization?: string
  approvedDomains?: string[]
}

export type Offering = {
  id: string
  programId: string
  title: string
  slug: string
  category: 'recruitment' | 'performance' | 'community' | 'education' | 'media'
  description: string
  pricingModel: 'fixed' | 'custom' | 'subscription'
  price?: number
  active: boolean
  deliverables: string[]
}

export type MediaItem = {
  id: string
  programId: string
  title: string
  slug: string
  type: 'video' | 'audio' | 'article' | 'gallery'
  thumbnailUrl: string
  mediaUrl: string
  description: string
  tags: string[]
  featured: boolean
  visibility: 'public' | 'private'
}

export type ServiceRequest = {
  id: string
  programId: string
  offeringId: string
  requesterId: string
  organizationName?: string
  status: 'draft' | 'submitted' | 'approved' | 'in-progress' | 'completed'
  notes?: string
  budget?: number
  frequency?: string
  createdAt: string
}

export type Deliverable = {
  id: string
  requestId: string
  title: string
  status: 'queued' | 'active' | 'completed'
  dueDate?: string
  trackingNotes?: string
}

export type FacultyProfile = {
  id: string
  name: string
  title: string
  bio: string
  focusAreas: string[]
  credentials: string[]
  headshotUrl?: string
}

// Choral Domain Specifics (Distinguishing Choir from Orchestra, Band, and Forge)
export type VoicePart =
  | 'Soprano 1'
  | 'Soprano 2'
  | 'Mezzo-Soprano'
  | 'Alto 1'
  | 'Alto 2'
  | 'Contralto'
  | 'Tenor 1'
  | 'Tenor 2'
  | 'Baritone'
  | 'Bass 1'
  | 'Bass 2'
  | 'Bass-Baritone'
  | 'Countertenor'
  | 'Octavist'

export type ChoralGuildRole =
  | 'chorister'
  | 'section_leader'
  | 'vocal_captain'
  | 'choral_director'
  | 'conductor'
  | 'rehearsal_accompanist'
  | 'vocal_arranger'
  | 'featured_soloist'
  | 'vocal_producer'

export type SightReadingProficiency =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'professional_solfege'

export interface VocalAttributes {
  rangeLowest: string
  rangeHighest: string
  tessitura: string
  sightReadingProficiency: SightReadingProficiency
  languagesDiction: string[]
  traditions: string[]
  vocalToneQuality?: string
}

export interface RehearsalStem {
  part: 'Soprano' | 'Alto' | 'Tenor' | 'Bass' | 'Tutti' | 'Piano Guide'
  audioUrl: string
  isIsolatedDefault?: boolean
}

export interface ChoralRepertoireItem {
  id: string
  title: string
  composer: string
  arranger?: string
  voicing: string // e.g. 'SATB', 'SSAA', 'TTBB', 'Double Choir'
  assignedPart: VoicePart
  masteryStatus: 'learning' | 'rehearsing' | 'performance_ready'
  keySignature?: string
  tempoBpm?: number
  stems: RehearsalStem[]
  sheetMusicUrl?: string
  notes?: string
}

export interface ChoralCommitment {
  id: string
  eventTitle: string
  repertoireSummary: string
  date: string
  callTime: string
  performanceTime: string
  stage: string
  attire: 'formal_robes' | 'concert_black' | 'rehearsal_casual'
  uncompensatedRehearsalHours: number
  beamCoinReward: number
  status: 'called' | 'confirmed' | 'attended'
}

export interface ChoralParticipantProfile {
  id: string
  // Decoupled Universal Identity (references business / home UID)
  universalUid: string
  displayName: string
  email: string
  originDomain: 'business' | 'home' | 'orchestra' | 'external'
  universalRole: string // e.g. 'Producer & Beatmaker', 'Principal Cello', 'Arts Leader'

  // Choral Guild Specific Credentials
  voicePart: VoicePart
  secondaryVoicePart?: VoicePart
  guildRole: ChoralGuildRole
  vocalAttributes: VocalAttributes
  bioPlaybill: string
  repertoire: ChoralRepertoireItem[]
  commitments: ChoralCommitment[]
  uncompensatedHoursTotal: number
  beamCoinBalance: number
  headshotUrl?: string
  robeSize?: string
  pitchPipePreference?: 'A440' | 'C523'
}
