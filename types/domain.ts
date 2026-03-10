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
}
