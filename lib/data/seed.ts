import { chorusProgram } from '@/lib/config/programs'
import type { Deliverable, FacultyProfile, MediaItem, Offering, ServiceRequest } from '@/types/domain'

export const activeProgram = chorusProgram

export const facultyProfiles: FacultyProfile[] = [
  {
    id: 'faculty-dr-agualay',
    name: 'Dr. Agualay',
    title: 'Faculty Director, Community and Choral Programs',
    bio: 'Leads program design connecting performance excellence, recruitment partnerships, and inclusive community participation.',
    focusAreas: ['choral instruction', 'community partnerships', 'youth recruitment', 'program development'],
    credentials: ['DMA, Choral Conducting', 'Regional Arts Partnership Lead', 'Higher Education Program Director'],
  },
]

export const mediaItems: MediaItem[] = [
  {
    id: 'media-featured-1',
    programId: activeProgram.id,
    title: 'Voices In Concert: Winter Feature',
    slug: 'voices-in-concert-winter-feature',
    type: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    mediaUrl: 'https://example.com/media/voices-in-concert-winter-feature',
    description: 'Featured concert performance highlighting the full chorus ensemble and guest collaborators.',
    tags: ['featured-performances', 'community-voices'],
    featured: true,
    visibility: 'public',
  },
  {
    id: 'media-rehearsal-1',
    programId: activeProgram.id,
    title: 'Rehearsal Room: Section Blend Session',
    slug: 'rehearsal-room-section-blend-session',
    type: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1200&q=80',
    mediaUrl: 'https://example.com/media/rehearsal-room-section-blend-session',
    description: 'Rehearsal cuts focused on ensemble blending and dynamic interpretation.',
    tags: ['rehearsal-room', 'behind-the-music'],
    featured: false,
    visibility: 'public',
  },
  {
    id: 'media-join-1',
    programId: activeProgram.id,
    title: 'Join The Chorus: Participation Guide',
    slug: 'join-the-chorus-participation-guide',
    type: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80',
    mediaUrl: 'https://example.com/media/join-the-chorus-participation-guide',
    description: 'An overview of participation pathways for independent participants and partner organizations.',
    tags: ['join-the-chorus', 'upcoming-opportunities'],
    featured: false,
    visibility: 'public',
  },
  {
    id: 'media-community-1',
    programId: activeProgram.id,
    title: 'Community Voices: Neighborhood Spotlight',
    slug: 'community-voices-neighborhood-spotlight',
    type: 'article',
    thumbnailUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    mediaUrl: 'https://example.com/media/community-voices-neighborhood-spotlight',
    description: 'A story-driven feature on community members and ensemble impact.',
    tags: ['community-voices', 'outreach-and-recruitment'],
    featured: false,
    visibility: 'public',
  },
  {
    id: 'media-faculty-1',
    programId: activeProgram.id,
    title: 'Faculty Spotlight: Dr. Agualay',
    slug: 'faculty-spotlight-dr-agualay',
    type: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1200&q=80',
    mediaUrl: 'https://example.com/media/faculty-spotlight-dr-agualay',
    description: 'Dr. Agualay discusses curriculum design, recruitment strategy, and program outcomes.',
    tags: ['faculty-spotlight', 'behind-the-music'],
    featured: true,
    visibility: 'public',
  },
  {
    id: 'media-behind-1',
    programId: activeProgram.id,
    title: 'Behind The Music: Arrangement Breakdown',
    slug: 'behind-the-music-arrangement-breakdown',
    type: 'audio',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80',
    mediaUrl: 'https://example.com/media/behind-the-music-arrangement-breakdown',
    description: 'Audio commentary on arranging choices and rehearsal adaptation.',
    tags: ['behind-the-music', 'rehearsal-room'],
    featured: false,
    visibility: 'public',
  },
  {
    id: 'media-opportunity-1',
    programId: activeProgram.id,
    title: 'Upcoming Opportunities: Spring Intake',
    slug: 'upcoming-opportunities-spring-intake',
    type: 'article',
    thumbnailUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80',
    mediaUrl: 'https://example.com/media/upcoming-opportunities-spring-intake',
    description: 'Upcoming auditions, onboarding windows, and partner collaboration opportunities.',
    tags: ['upcoming-opportunities', 'join-the-chorus'],
    featured: false,
    visibility: 'public',
  },
  {
    id: 'media-outreach-1',
    programId: activeProgram.id,
    title: 'Outreach and Recruitment: Campus Activation Reel',
    slug: 'outreach-and-recruitment-campus-activation-reel',
    type: 'gallery',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    mediaUrl: 'https://example.com/media/outreach-and-recruitment-campus-activation-reel',
    description: 'Visual gallery from partner-school recruitment performances and outreach activations.',
    tags: ['outreach-and-recruitment', 'featured-performances'],
    featured: false,
    visibility: 'public',
  },
]

export const offerings: Offering[] = [
  {
    id: 'offering-recruitment-showcase',
    programId: activeProgram.id,
    title: 'Recruitment Showcase Performance',
    slug: 'recruitment-showcase-performance',
    category: 'recruitment',
    description: 'Curated ensemble performances for admissions, outreach, and institutional recruitment events.',
    pricingModel: 'custom',
    active: true,
    deliverables: ['Program plan', 'Performance roster', 'Post-event impact summary'],
  },
  {
    id: 'offering-community-residency',
    programId: activeProgram.id,
    title: 'Community Chorus Residency',
    slug: 'community-chorus-residency',
    category: 'community',
    description: 'Recurring community-centered rehearsals and public performances with measurable engagement outcomes.',
    pricingModel: 'subscription',
    price: 5000,
    active: true,
    deliverables: ['Monthly activation schedule', 'Community participation metrics', 'Content highlights reel'],
  },
  {
    id: 'offering-faculty-masterclass',
    programId: activeProgram.id,
    title: 'Faculty Masterclass Series',
    slug: 'faculty-masterclass-series',
    category: 'education',
    description: 'Skill-focused educational sessions led by faculty for participants, educators, and partner organizations.',
    pricingModel: 'fixed',
    price: 1800,
    active: true,
    deliverables: ['Session curriculum', 'Participant attendance report', 'Recommended next steps'],
  },
  {
    id: 'offering-performance-package',
    programId: activeProgram.id,
    title: 'Concert Performance Package',
    slug: 'concert-performance-package',
    category: 'performance',
    description: 'Turnkey concert support including programming consultation, rehearsal prep, and staged performance.',
    pricingModel: 'custom',
    active: true,
    deliverables: ['Performance blueprint', 'Technical run-of-show', 'Event recap'],
  },
  {
    id: 'offering-media-capture',
    programId: activeProgram.id,
    title: 'Chorus Media Capture',
    slug: 'chorus-media-capture',
    category: 'media',
    description: 'Capture and package rehearsal and performance media for distribution and archive.',
    pricingModel: 'fixed',
    price: 2400,
    active: true,
    deliverables: ['Edited media package', 'Thumbnail set', 'Distribution-ready files'],
  },
]

export const serviceRequests: ServiceRequest[] = [
  {
    id: 'request-001',
    programId: activeProgram.id,
    offeringId: 'offering-recruitment-showcase',
    requesterId: 'user-rep-001',
    organizationName: 'Milwaukee Conservatory Partners',
    status: 'submitted',
    notes: 'Interested in a spring campus recruitment event with student Q&A.',
    budget: 3500,
    frequency: 'one-time',
    createdAt: '2026-03-01',
  },
  {
    id: 'request-002',
    programId: activeProgram.id,
    offeringId: 'offering-community-residency',
    requesterId: 'user-rep-002',
    organizationName: 'Northside Arts Collective',
    status: 'in-progress',
    notes: 'Monthly residency proposal in review.',
    budget: 6000,
    frequency: 'monthly',
    createdAt: '2026-02-18',
  },
  {
    id: 'request-003',
    programId: activeProgram.id,
    offeringId: 'offering-faculty-masterclass',
    requesterId: 'user-faculty-001',
    organizationName: 'Community Voices Network',
    status: 'approved',
    notes: 'Masterclass schedule locked for April.',
    budget: 1800,
    frequency: 'series',
    createdAt: '2026-02-10',
  },
]

export const deliverables: Deliverable[] = [
  {
    id: 'deliverable-001',
    requestId: 'request-002',
    title: 'Residency Programming Draft',
    status: 'active',
    dueDate: '2026-03-15',
    trackingNotes: 'Faculty review in progress with community partner edits pending.',
  },
  {
    id: 'deliverable-002',
    requestId: 'request-003',
    title: 'Masterclass Curriculum Packet',
    status: 'completed',
    dueDate: '2026-02-28',
    trackingNotes: 'Delivered to partner and archived for dashboard reference.',
  },
  {
    id: 'deliverable-003',
    requestId: 'request-001',
    title: 'Recruitment Event Roster',
    status: 'queued',
    dueDate: '2026-03-20',
    trackingNotes: 'Waiting on final time slot confirmation from institution.',
  },
]

const railDefinitions = [
  { id: 'featured-performances', title: 'Featured Performances' },
  { id: 'rehearsal-room', title: 'Rehearsal Room' },
  { id: 'join-the-chorus', title: 'Join The Chorus' },
  { id: 'community-voices', title: 'Community Voices' },
  { id: 'faculty-spotlight', title: 'Faculty Spotlight' },
  { id: 'behind-the-music', title: 'Behind The Music' },
  { id: 'upcoming-opportunities', title: 'Upcoming Opportunities' },
  { id: 'outreach-and-recruitment', title: 'Outreach and Recruitment' },
] as const

export type MediaRail = {
  id: string
  title: string
  items: MediaItem[]
}

export const mediaRails: MediaRail[] = railDefinitions.map((rail) => ({
  id: rail.id,
  title: rail.title,
  items: mediaItems.filter((item) => item.tags.includes(rail.id)),
}))

export const featuredMedia: MediaItem = mediaItems.find((item) => item.featured) ?? mediaItems[0]

export function getMediaBySlug(slug: string): MediaItem | undefined {
  return mediaItems.find((item) => item.slug === slug)
}

export function getOfferingById(id: string): Offering | undefined {
  return offerings.find((offering) => offering.id === id)
}
