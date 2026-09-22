import { chorusProgram } from '@/lib/config/programs'
import type {
  ChoralCommitment,
  ChoralParticipantProfile,
  ChoralRepertoireItem,
  Deliverable,
  FacultyProfile,
  MediaItem,
  Offering,
  ServiceRequest,
} from '@/types/domain'

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

// ---------------------------------------------------------------------------
// CHORAL REPERTOIRE BINDER & SECTIONAL REHEARSAL STEMS
// ---------------------------------------------------------------------------
export const masterChoralRepertoire: ChoralRepertoireItem[] = [
  {
    id: 'rep-bonds-brown-king',
    title: 'The Ballad of the Brown King',
    composer: 'Margaret Bonds',
    arranger: 'Langston Hughes (Libretto)',
    voicing: 'SATB Chorus, Soloists & Orchestra',
    assignedPart: 'Tenor 1',
    masteryStatus: 'performance_ready',
    keySignature: 'F Major / D Minor',
    tempoBpm: 88,
    notes: 'Dedicated to Martin Luther King Jr. Section 4 requires seamless blend between Tenor 1 and Baritone line.',
    sheetMusicUrl: '#',
    stems: [
      { part: 'Tutti', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Tenor', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3', isIsolatedDefault: true },
      { part: 'Soprano', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Alto', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Bass', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
    ],
  },
  {
    id: 'rep-dett-chariot-jubilee',
    title: 'The Chariot Jubilee',
    composer: 'R. Nathaniel Dett',
    voicing: 'Motet for Tenor Solo, Chorus & Organ',
    assignedPart: 'Tenor 1',
    masteryStatus: 'rehearsing',
    keySignature: 'G Major',
    tempoBpm: 72,
    notes: 'Complex polyphonic counterpoint in the closing "Hallelujah". Solfège articulation required.',
    sheetMusicUrl: '#',
    stems: [
      { part: 'Tutti', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Tenor', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3', isIsolatedDefault: true },
      { part: 'Soprano', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Alto', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Bass', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
    ],
  },
  {
    id: 'rep-hailstork-shout',
    title: 'Shout for Joy',
    composer: 'Adolphus Hailstork',
    voicing: 'Double SATB Chorus & Brass',
    assignedPart: 'Bass-Baritone',
    masteryStatus: 'performance_ready',
    keySignature: 'C Major',
    tempoBpm: 126,
    notes: 'Dynamic rhythm and syncopated entrances in 7/8 bars. Rhythmic precision on Bass 2 anchor.',
    sheetMusicUrl: '#',
    stems: [
      { part: 'Tutti', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Bass', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3', isIsolatedDefault: true },
      { part: 'Tenor', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Alto', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Soprano', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
    ],
  },
  {
    id: 'rep-undine-walk',
    title: 'We Shall Walk Through the Valley in Peace',
    composer: 'Undine Smith Moore',
    voicing: 'A Cappella SATB Chorus',
    assignedPart: 'Tenor 1',
    masteryStatus: 'performance_ready',
    keySignature: 'E-Flat Major',
    tempoBpm: 60,
    notes: 'Lyrical legato, warm unforced tone, staggered breathing in measure 24-32.',
    sheetMusicUrl: '#',
    stems: [
      { part: 'Tutti', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Tenor', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3', isIsolatedDefault: true },
      { part: 'Soprano', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Alto', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
      { part: 'Bass', audioUrl: 'https://cdn.freesound.org/previews/387/387232_5121236-lq.mp3' },
    ],
  },
]

// ---------------------------------------------------------------------------
// CHORAL GUILD PARTICIPANT PROFILES
// Illustrating the Senior Supervisor precedent: Decoupled Participant Identity
// ---------------------------------------------------------------------------
export const choralProfiles: ChoralParticipantProfile[] = [
  {
    id: 'profile-paul-choral',
    universalUid: 'uid_paul_producer',
    displayName: 'Paul',
    email: 'paul@beamthinktank.space',
    originDomain: 'business',
    universalRole: 'Music Producer · Beatmaker · Creative Ops',
    voicePart: 'Tenor 1',
    secondaryVoicePart: 'Tenor 2',
    guildRole: 'vocal_producer',
    bioPlaybill:
      'Originator and contemporary producer across the BEAM ecosystem. In the Choral Guild, Paul lends clean lyric tenor precision and modern vocal layering production, bridging sacred choral arrangements with studio beatmaking.',
    headshotUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    robeSize: 'Tall / M',
    pitchPipePreference: 'A440',
    uncompensatedHoursTotal: 34,
    beamCoinBalance: 210,
    vocalAttributes: {
      rangeLowest: 'C3',
      rangeHighest: 'A4',
      tessitura: 'E3 – G4',
      sightReadingProficiency: 'intermediate',
      languagesDiction: [
        'English (Diction & Articulation)',
        'Latin (Ecclesiastical)',
        'African American Sacred Vernacular',
        'Italian',
      ],
      traditions: [
        'Contemporary Choral',
        'Gospel & Praise Harmony',
        'Studio Vocal Layering & Backing Vocals',
        'Choral Arranging',
      ],
      vocalToneQuality: 'Warm lyric tenor with bright upper resonance and clean micro-tonal pitch centering.',
    },
    repertoire: [
      masterChoralRepertoire[0],
      masterChoralRepertoire[1],
      masterChoralRepertoire[3],
    ],
    commitments: [
      {
        id: 'commit-001',
        eventTitle: 'Margaret Bonds "Brown King" Rehearsal Tutti',
        repertoireSummary: 'Bonds Movement 3 & 4 full choral run-through',
        date: '2026-10-14',
        callTime: '17:30 EST',
        performanceTime: '19:00 EST',
        stage: 'Main Choral Sanctuary Hall',
        attire: 'rehearsal_casual',
        uncompensatedRehearsalHours: 3.5,
        beamCoinReward: 25,
        status: 'confirmed',
      },
      {
        id: 'commit-002',
        eventTitle: 'Symphonic Chorus Gala Performance with BDSO',
        repertoireSummary: 'Full SATB tutti with orchestra (Margaret Bonds & Adolphus Hailstork)',
        date: '2026-11-08',
        callTime: '18:00 EST',
        performanceTime: '20:00 EST',
        stage: 'Symphony Hall Proscenium',
        attire: 'formal_robes',
        uncompensatedRehearsalHours: 4.0,
        beamCoinReward: 50,
        status: 'called',
      },
    ],
  },
  {
    id: 'profile-ezra-choral',
    universalUid: 'uid_ezra_performer',
    displayName: 'Ezra Haugabrooks',
    email: 'ezra.haugabrooks@gmail.com',
    originDomain: 'orchestra',
    universalRole: 'Section Leader & Resident Cellist (Orchestra)',
    voicePart: 'Bass-Baritone',
    secondaryVoicePart: 'Bass 1',
    guildRole: 'chorister',
    bioPlaybill:
      'Principal cellist and string specialist in BEAM Orchestra. In the Choral Guild, Ezra contributes resonant bass-baritone foundation and solfège sight-reading, anchoring low modal and choral cadences.',
    headshotUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    robeSize: 'Regular / L',
    pitchPipePreference: 'A440',
    uncompensatedHoursTotal: 48,
    beamCoinBalance: 320,
    vocalAttributes: {
      rangeLowest: 'E♭2',
      rangeHighest: 'F4',
      tessitura: 'G2 – D4',
      sightReadingProficiency: 'professional_solfege',
      languagesDiction: [
        'Latin (Ecclesiastical & Classical)',
        'German (Choral Diction)',
        'French',
        'English',
      ],
      traditions: [
        'Negro Spirituals & Black Sacred',
        'European Polyphony & Renaissance Motets',
        'Oratorio & Symphonic Chorus',
      ],
      vocalToneQuality: 'Rich woody bass-baritone with natural chest resonant overtone projection.',
    },
    repertoire: [
      masterChoralRepertoire[0],
      masterChoralRepertoire[2],
      masterChoralRepertoire[3],
    ],
    commitments: [
      {
        id: 'commit-003',
        eventTitle: 'Bass Sectional: Low Pedals & Polyphony',
        repertoireSummary: 'Hailstork & Dett sectional rehearsal',
        date: '2026-10-18',
        callTime: '10:00 EST',
        performanceTime: '12:00 EST',
        stage: 'Steinway Choral Studio B',
        attire: 'rehearsal_casual',
        uncompensatedRehearsalHours: 2.0,
        beamCoinReward: 20,
        status: 'confirmed',
      },
    ],
  },
  {
    id: 'profile-agualay-choral',
    universalUid: 'faculty-dr-agualay',
    displayName: 'Dr. Agualay',
    email: 'agualay@beamthinktank.space',
    originDomain: 'home',
    universalRole: 'Faculty Director, Community and Choral Programs',
    voicePart: 'Mezzo-Soprano',
    secondaryVoicePart: 'Contralto',
    guildRole: 'choral_director',
    bioPlaybill:
      'DMA in Choral Conducting. Maestro and visionary leader of the BEAM Choral Guild, shaping vocal blend, pedagogical excellence, and diaspora liturgical storytelling across regional sanctuaries.',
    headshotUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    robeSize: 'Director Robe / M',
    pitchPipePreference: 'C523',
    uncompensatedHoursTotal: 96,
    beamCoinBalance: 850,
    vocalAttributes: {
      rangeLowest: 'A3',
      rangeHighest: 'B♭5',
      tessitura: 'C4 – F5',
      sightReadingProficiency: 'professional_solfege',
      languagesDiction: [
        'Latin',
        'German',
        'French',
        'Italian',
        'Spanish',
        'Yoruba / West African Tonal',
      ],
      traditions: [
        'Choral Conducting & Rehearsal Pedagogy',
        'Diaspora Sacred Liturgies',
        'Extended Vocal Techniques',
      ],
      vocalToneQuality: 'Full-bodied dramatic mezzo with authoritative directorial timbre.',
    },
    repertoire: masterChoralRepertoire,
    commitments: [
      {
        id: 'commit-004',
        eventTitle: 'Masterclass & Section Blend Rehearsal',
        repertoireSummary: 'Full Guild Chorus & Section Leaders Clinic',
        date: '2026-10-14',
        callTime: '17:00 EST',
        performanceTime: '21:00 EST',
        stage: 'Main Choral Sanctuary Hall',
        attire: 'formal_robes',
        uncompensatedRehearsalHours: 4.0,
        beamCoinReward: 60,
        status: 'confirmed',
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// THEATRE WP PROGRAMME SCHEDULE (Art & Culture Precedent)
// ---------------------------------------------------------------------------
export interface SeasonProgrammeItem {
  id: string
  actNumber: string
  day: string
  month: string
  year: string
  title: string
  composer: string
  subtitle: string
  hall: string
  forces: string
  callTime: string
  curtainTime: string
  status: 'In Rehearsal' | 'Premiere' | 'Auditions Open' | 'Encore'
  ticketStatus: 'Reserve Pass' | 'Chorister Call Sheet' | 'Guild Roster'
}

export const seasonProgramme: SeasonProgrammeItem[] = [
  {
    id: 'prog-001',
    actNumber: 'ACT I',
    day: '14',
    month: 'OCT',
    year: '2026',
    title: 'The Ballad of the Brown King',
    composer: 'Margaret Bonds · Libretto by Langston Hughes',
    subtitle: 'Full SATB Chorus, Soloists & Orchestral Chamber Strings',
    hall: 'Main Choral Sanctuary Hall',
    forces: '48 Choristers · SATB Tutti',
    callTime: '17:30 Call',
    curtainTime: '19:30 Curtain',
    status: 'In Rehearsal',
    ticketStatus: 'Chorister Call Sheet',
  },
  {
    id: 'prog-002',
    actNumber: 'ACT II',
    day: '28',
    month: 'OCT',
    year: '2026',
    title: 'The Chariot Jubilee & Sacred Motets',
    composer: 'R. Nathaniel Dett',
    subtitle: 'Vocal Chamber Ensemble, Tenor Soloist & Steinway Grand',
    hall: 'Steinway Choral Studio A',
    forces: '24 Chamber Voices · Solo Tenor',
    callTime: '18:00 Call',
    curtainTime: '20:00 Curtain',
    status: 'Premiere',
    ticketStatus: 'Reserve Pass',
  },
  {
    id: 'prog-003',
    actNumber: 'ACT III',
    day: '08',
    month: 'NOV',
    year: '2026',
    title: 'Shout for Joy: Double Chorus Symphony',
    composer: 'Adolphus Hailstork',
    subtitle: 'BEAM Choral Guild joint residency with BDSO Brass & Celli',
    hall: 'Symphony Proscenium Hall',
    forces: '60 Choristers · Double Choir SATB',
    callTime: '18:00 Call',
    curtainTime: '20:00 Curtain',
    status: 'In Rehearsal',
    ticketStatus: 'Reserve Pass',
  },
  {
    id: 'prog-004',
    actNumber: 'ACT IV',
    day: '21',
    month: 'NOV',
    year: '2026',
    title: 'Diaspora A Cappella Masterworks',
    composer: 'Undine Smith Moore & Hall Johnson',
    subtitle: 'Spirituals, Solfège Mastery, and Unaccompanied Liturgy',
    hall: 'Cathedral of Saint Mark',
    forces: 'A Cappella Guild Chorus',
    callTime: '16:00 Call',
    curtainTime: '18:30 Curtain',
    status: 'Auditions Open',
    ticketStatus: 'Guild Roster',
  },
]

export function getChoralProfileById(id: string): ChoralParticipantProfile | undefined {
  return choralProfiles.find((p) => p.id === id)
}

export function getChoralProfileByEmail(email: string): ChoralParticipantProfile | undefined {
  const norm = email.trim().toLowerCase()
  return choralProfiles.find((p) => p.email.toLowerCase() === norm)
}
