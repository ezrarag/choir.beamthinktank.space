import type {
  ChoralComplianceBadge,
  ChoralGuildId,
  ChoralRoleDefinition,
  ChoralRoleId,
  MonetizationPhase,
} from '@/types/choralTaxonomy'

export const CHORAL_ROLE_DEFINITIONS: ChoralRoleDefinition[] = [
  // 1. Artistic Leadership & Performance
  {
    id: 'choral_director_conductor',
    guildId: 'artistic_performance',
    title: 'Artistic Director & Principal Conductor',
    governingBody: 'ACDA / Chorus America',
    description: 'Directs artistic vision, programs choral literature, leads tutti rehearsals, and shapes ensemble vocal blend.',
    responsibilities: ['Repertoire selection', 'Master rehearsal direction', 'Guest artist programming'],
    complianceRequirements: ['Artistic Directorial Agreement', 'Code of Conduct'],
  },
  {
    id: 'associate_choral_conductor',
    guildId: 'artistic_performance',
    title: 'Associate Conductor & Chorus Master',
    governingBody: 'ACDA',
    description: 'Covers conductor rehearsals, conducts sectional rehearsals, and directs off-stage cues.',
    responsibilities: ['Sectional prep', 'Vocal warm-ups', 'Youth ensemble leadership'],
    complianceRequirements: ['Associate Conductor Contract'],
  },
  {
    id: 'soprano_section_leader',
    guildId: 'artistic_performance',
    title: 'Soprano Section Leader (Vocal Captain)',
    governingBody: 'AGMA / NATS',
    description: 'Leads Soprano 1/2 sectional intonation, high tessitura placement, and vowel alignment.',
    responsibilities: ['Soprano sectional calls', 'Vocal blend balance', 'Sight-reading verification'],
    complianceRequirements: ['Section Leader Agreement', 'W-9 Verified'],
  },
  {
    id: 'alto_section_leader',
    guildId: 'artistic_performance',
    title: 'Alto Section Leader (Vocal Captain)',
    governingBody: 'AGMA / NATS',
    description: 'Anchors Contralto and Mezzo-Soprano inner harmonic movement and chest/head mix.',
    responsibilities: ['Alto sectional calls', 'Harmonic balance', 'Diction cohesion'],
    complianceRequirements: ['Section Leader Agreement', 'W-9 Verified'],
  },
  {
    id: 'tenor_section_leader',
    guildId: 'artistic_performance',
    title: 'Tenor Section Leader (Vocal Captain)',
    governingBody: 'AGMA / NATS',
    description: 'Guides lyric tenor resonance, passaggio transitions, and tenor counter-melodies.',
    responsibilities: ['Tenor sectional calls', 'Intonation in upper third', 'Repertoire readiness'],
    complianceRequirements: ['Section Leader Agreement', 'W-9 Verified'],
  },
  {
    id: 'bass_section_leader',
    guildId: 'artistic_performance',
    title: 'Bass Section Leader (Vocal Captain)',
    governingBody: 'AGMA / NATS',
    description: 'Provides fundamental harmonic anchor, low pedal resonance, and rhythmic precision.',
    responsibilities: ['Bass sectional calls', 'Tuning the fundamental', 'Low octave support'],
    complianceRequirements: ['Section Leader Agreement', 'W-9 Verified'],
  },
  {
    id: 'tutti_chorister',
    guildId: 'artistic_performance',
    title: 'Core SATB Chorister',
    governingBody: 'AGMA / Chorus America',
    description: 'Audition-cleared tenured vocalist in active season chairs across sacred and symphonic performances.',
    responsibilities: ['Attendance at calls', 'Repertoire binder mastery', 'Concert black attire compliance'],
    complianceRequirements: ['Singer Engagement Agreement', 'W-9 Form', 'Media Release'],
  },
  {
    id: 'rehearsal_accompanist',
    guildId: 'artistic_performance',
    title: 'Principal Choral Accompanist (Pianist / Organist)',
    governingBody: 'American Guild of Organists (AGO) / ACDA',
    description: 'Reads open 4–8 part choral reductions, sounds section pitches, and supports vocal coaching.',
    responsibilities: ['Open score reading', 'Vocal coaching accompaniment', 'Organ liturgies'],
    complianceRequirements: ['Collaborative Pianist Agreement', 'W-9 Verified'],
  },

  // 2. Composition & Choral Library
  {
    id: 'choral_composer',
    guildId: 'composition_library',
    title: 'Commissioned Choral Composer',
    governingBody: 'ACDA / ASCAP / BMI',
    description: 'Author of original sacred motets, choral symphonies, and liturgical works.',
    responsibilities: ['Original score delivery', 'Program notes', 'Commission masterclass'],
    complianceRequirements: ['Commission Agreement', 'Publishing Split Sheet'],
  },
  {
    id: 'vocal_arranger',
    guildId: 'composition_library',
    title: 'Vocal Arranger & Polyphonic Harmonizer',
    governingBody: 'GMWA / ACDA',
    description: 'Adapts contemporary beats, spirituals, and anthems into 4-part (SATB) choral arrangements.',
    responsibilities: ['Choral arrangement', 'Harmonic voicing', 'Stem arrangement guide'],
    complianceRequirements: ['Arranger Agreement', 'Mechanical & Derivative License'],
  },
  {
    id: 'choral_music_librarian',
    guildId: 'composition_library',
    title: 'Principal Choral Music Librarian',
    governingBody: 'MOLA / ACDA',
    description: 'Curates choral octavos, manages digital score dissemination, and clears ASCAP/CCLI rights.',
    responsibilities: ['Folder distribution', 'License clearance', 'Score marking compliance'],
    complianceRequirements: ['Librarian Service Agreement'],
  },
  {
    id: 'language_diction_coach',
    guildId: 'composition_library',
    title: 'Choral Diction & Linguistic Coach',
    governingBody: 'ACDA / NATS',
    description: 'Instructs choristers in Ecclesiastical Latin, German, French, Yoruba, and Gullah phonetics.',
    responsibilities: ['IPA pronunciation guides', 'Diction masterclasses', 'Linguistic rehearsal notes'],
    complianceRequirements: ['Diction Coach Retainer'],
  },

  // 3. Production & Stage Ops
  {
    id: 'choral_personnel_manager',
    guildId: 'production_engineering',
    title: 'Choral Personnel Manager & Contractor',
    governingBody: 'Chorus America / AGMA',
    description: 'Hires the vocal roster, publishes call times, tracks attendance, and enforces AGMA vocal rest rules.',
    responsibilities: ['Audition coordination', 'Call sheet publication', 'Work rule enforcement'],
    complianceRequirements: ['Personnel Manager Agreement'],
  },
  {
    id: 'choral_stage_robe_master',
    guildId: 'production_engineering',
    title: 'Choral Stage Manager & Robe Master',
    governingBody: 'AGMA Work Rules',
    description: 'Arranges riser geometry (horseshoe, semi-circle), manages singer height order, and fits concert robes.',
    responsibilities: ['Riser setup', 'Height chart order', 'Concert robe maintenance'],
    complianceRequirements: ['Stage Production Agreement'],
  },
  {
    id: 'acoustic_choral_engineer',
    guildId: 'production_engineering',
    title: 'Acoustic & Choral Recording Engineer',
    governingBody: 'Audio Engineering Society (AES)',
    description: 'Sets stereo Blumlein and ambient room mic arrays in cathedral and hall acoustics.',
    responsibilities: ['Microphone array placement', 'Acoustic calibration', 'Multitrack capture'],
    complianceRequirements: ['Engineering Contract', 'Master Media Release'],
  },
  {
    id: 'vocal_stem_mix_engineer',
    guildId: 'production_engineering',
    title: 'Vocal Stem & Practice Track Engineer',
    governingBody: 'AES',
    description: 'Mixes isolated rehearsal tracks (Soprano, Alto, Tenor, Bass stems) and crossover studio layers.',
    responsibilities: ['Stem isolation export', 'Practice track mastering', 'Vocal pitch alignment'],
    complianceRequirements: ['Studio Engineering Agreement'],
  },

  // 4. Operations, Business & Legal
  {
    id: 'executive_director',
    guildId: 'business_operations',
    title: 'Executive Director',
    governingBody: 'Chorus America Governance Standards',
    description: 'Overall executive leadership, board governance, and fiduciary accountability.',
    responsibilities: ['Strategic vision', 'Board liaison', 'Fiduciary oversight'],
    complianceRequirements: ['Officer Appointment', 'Fiduciary Disclosure'],
  },
  {
    id: 'institutional_presenter_lead',
    guildId: 'business_operations',
    title: 'Institutional Presenter & Symphony Liaison',
    governingBody: 'Chorus America',
    description: 'Contracts symphonic chorus augmentation with orchestras (e.g. BDSO) and university residencies.',
    responsibilities: ['Presenter contracts', 'Symphonic rider agreements', 'Venue bookings'],
    complianceRequirements: ['Authorized Signatory'],
  },
  {
    id: 'choral_ip_rights_counsel',
    guildId: 'business_operations',
    title: 'Choral Rights & IP Legal Counsel',
    governingBody: 'State Bar / Arts Legal Clinic',
    description: 'Drafts singer master releases, sync licenses, arranger split sheets, and 1099 compliance.',
    responsibilities: ['Performer releases', 'Split sheets', 'Contractor classification'],
    complianceRequirements: ['Legal Retainer Agreement'],
  },
  {
    id: 'finance_payroll_controller',
    guildId: 'business_operations',
    title: 'Finance & Payroll Controller',
    governingBody: 'AICPA / Chorus America Financial Guidelines',
    description: 'Administers W-9 verification, Stripe Connect, BEAM Coin honorariums, and USD stipend payroll.',
    responsibilities: ['Direct deposit setup', 'BEAM Coin distribution', 'Year-end 1099 filing'],
    complianceRequirements: ['Financial Controller Agreement'],
  },

  // 5. Vocal Health & Education
  {
    id: 'vocal_health_specialist',
    guildId: 'vocal_health_education',
    title: 'Vocal Pedagogue & Health Specialist',
    governingBody: 'NATS / The Voice Foundation',
    description: 'Leads vocal science clinics, strain prevention, vocal warm-down protocols, and health checkups.',
    responsibilities: ['Vocal strain audits', 'Warm-down exercises', 'Rest protocols'],
    complianceRequirements: ['NATS Certification'],
  },
  {
    id: 'director_choral_education',
    guildId: 'vocal_health_education',
    title: 'Director of Choral Education & Youth Initiatives',
    governingBody: 'ACDA Youth Choirs',
    description: 'Oversees school choral festivals, student masterclasses, and collegiate choral apprenticeships.',
    responsibilities: ['School partnerships', 'Apprentice mentoring', 'Youth clinic design'],
    complianceRequirements: ['Background Check Clearance', 'Education Directorship Agreement'],
  },

  // 6. Originator & Client
  {
    id: 'track_originator_producer',
    guildId: 'originator_client',
    title: 'Track Originator & Producer (e.g., Paul)',
    governingBody: 'BEAM Cross-Domain Engagement Model',
    description: 'Brings contemporary tracks/beats into the choral sanctuary for polyphonic vocal layering.',
    responsibilities: ['Session origination', 'Creative direction', 'Arrangement commission'],
    complianceRequirements: ['BEAM Commercial Master Agreement', 'Split Sheet Executed'],
  },
  {
    id: 'symphonic_orchestra_client',
    guildId: 'originator_client',
    title: 'Symphonic Orchestra Client (e.g., BDSO)',
    governingBody: 'League of American Orchestras / Chorus America',
    description: 'Symphonic partner contracting 60-voice choir for large orchestral-choral masterworks.',
    responsibilities: ['Symphonic score delivery', 'Rehearsal schedule alignment', 'Joint production billing'],
    complianceRequirements: ['Institutional Augmentation Agreement'],
  },
]

export const CHORAL_COMPLIANCE_BADGES: ChoralComplianceBadge[] = [
  // Phase 0: Entity
  {
    id: 'badge-ein-501c3',
    phase: 'phase_0_entity',
    label: '501(c)(3) / Legal Entity Registered',
    description: 'Official incorporation documents and tax exemption EIN on file.',
    requiredRole: 'executive_director',
    status: 'verified',
    verifiedDate: '2026-01-15',
    signatoryName: 'Dr. Agualay',
  },
  {
    id: 'badge-stripe-connected',
    phase: 'phase_0_entity',
    label: 'Stripe Connect & Payout Bank Active',
    description: 'Verified merchant bank account linked for patron donations and ticket sales.',
    requiredRole: 'finance_payroll_controller',
    status: 'verified',
    verifiedDate: '2026-02-01',
    signatoryName: 'Guild Finance Desk',
  },
  {
    id: 'badge-premises-insurance',
    phase: 'phase_0_entity',
    label: 'Sanctuary General Liability Insurance COI',
    description: '$1M–$2M general liability certificate for cathedral and hall premises.',
    requiredRole: 'executive_director',
    status: 'verified',
    verifiedDate: '2026-02-10',
    signatoryName: 'Arts Coverage Group',
  },

  // Phase 1: Compliance
  {
    id: 'badge-personnel-manager',
    phase: 'phase_1_compliance',
    label: 'Choral Personnel Contractor Verified',
    description: 'Designated manager ensuring AGMA vocal rest and rehearsal length compliance.',
    requiredRole: 'choral_personnel_manager',
    status: 'verified',
    verifiedDate: '2026-03-01',
    signatoryName: 'Roster Administration',
  },
  {
    id: 'badge-ccli-ascap-license',
    phase: 'phase_1_compliance',
    label: 'ASCAP/BMI & CCLI / OneLicense Clearances',
    description: 'Institutional performance and streaming licenses secured for choral octavos.',
    requiredRole: 'choral_music_librarian',
    status: 'verified',
    verifiedDate: '2026-03-12',
    signatoryName: 'Choral Library Desk',
  },
  {
    id: 'badge-singer-agreement-template',
    phase: 'phase_1_compliance',
    label: 'Standard Singer Engagement Agreement',
    description: 'Master contract defining call times, honorariums, rest rules, and conduct.',
    requiredRole: 'choral_ip_rights_counsel',
    status: 'verified',
    verifiedDate: '2026-03-15',
    signatoryName: 'BEAM Legal Counsel',
  },

  // Phase 2: Roster Onboarding
  {
    id: 'badge-director-confirmed',
    phase: 'phase_2_roster',
    label: 'Artistic Director / Choirmaster Confirmed',
    description: 'Artistic leadership locked for current repertoire and vocal coaching.',
    requiredRole: 'choral_director_conductor',
    status: 'verified',
    verifiedDate: '2026-04-01',
    signatoryName: 'Dr. Agualay',
  },
  {
    id: 'badge-section-captains-locked',
    phase: 'phase_2_roster',
    label: 'SATB Section Leaders Confirmed',
    description: 'All 4 vocal captains (Soprano, Alto, Tenor, Bass) onboarded and assigned.',
    requiredRole: 'soprano_section_leader',
    status: 'verified',
    verifiedDate: '2026-04-10',
    signatoryName: 'Section Leadership Council',
  },
  {
    id: 'badge-w9-releases-collected',
    phase: 'phase_2_roster',
    label: '100% W-9s & Media Releases On File',
    description: 'Every called chorister has completed tax intake and media release forms.',
    requiredRole: 'finance_payroll_controller',
    status: 'verified',
    verifiedDate: '2026-04-18',
    signatoryName: 'Payroll Compliance',
  },
  {
    id: 'badge-robe-fitting-certified',
    phase: 'phase_2_roster',
    label: 'Concert Robe Fitting & Attire Certified',
    description: 'All choristers assigned custom robes or concert black attire specs.',
    requiredRole: 'choral_stage_robe_master',
    status: 'verified',
    verifiedDate: '2026-04-22',
    signatoryName: 'Wardrobe & Staging Desk',
  },

  // Phase 3: Revenue Live
  {
    id: 'badge-stripe-ticketing-live',
    phase: 'phase_3_revenue',
    label: 'Public Ticketing & Box Office Live',
    description: 'Stripe checkout active for reserved sanctuary passes and season subscriptions.',
    requiredRole: 'box_office_patron_lead',
    status: 'verified',
    verifiedDate: '2026-05-01',
    signatoryName: 'Box Office Lead',
  },
  {
    id: 'badge-stems-published',
    phase: 'phase_3_revenue',
    label: 'Isolated S/A/T/B Rehearsal Stems Published',
    description: 'Audio rehearsal tracks uploaded for part isolation practice.',
    requiredRole: 'vocal_stem_mix_engineer',
    status: 'verified',
    verifiedDate: '2026-05-10',
    signatoryName: 'Studio Stems Lead',
  },
  {
    id: 'badge-producer-split-signed',
    phase: 'phase_3_revenue',
    label: 'Commercial Split Sheet Signed (Paul / Donte)',
    description: 'Master agreement executed for commercial crossover vocal tracks.',
    requiredRole: 'track_originator_producer',
    status: 'verified',
    verifiedDate: '2026-05-15',
    signatoryName: 'Paul (Producer) & Donte (Arranger)',
  },
]

export function getRolesByGuild(guildId: ChoralGuildId): ChoralRoleDefinition[] {
  return CHORAL_ROLE_DEFINITIONS.filter((r) => r.guildId === guildId)
}

export function getBadgesByPhase(phase: MonetizationPhase): ChoralComplianceBadge[] {
  return CHORAL_COMPLIANCE_BADGES.filter((b) => b.phase === phase)
}

export function checkChoralMonetizationReadiness() {
  const total = CHORAL_COMPLIANCE_BADGES.length
  const verified = CHORAL_COMPLIANCE_BADGES.filter((b) => b.status === 'verified').length
  const pending = CHORAL_COMPLIANCE_BADGES.filter((b) => b.status === 'pending').length
  const missing = CHORAL_COMPLIANCE_BADGES.filter((b) => b.status === 'missing').length

  const phase0Ready = getBadgesByPhase('phase_0_entity').every((b) => b.status === 'verified')
  const phase1Ready = getBadgesByPhase('phase_1_compliance').every((b) => b.status === 'verified')
  const phase2Ready = getBadgesByPhase('phase_2_roster').every((b) => b.status === 'verified')
  const phase3Ready = getBadgesByPhase('phase_3_revenue').every((b) => b.status === 'verified')

  return {
    total,
    verified,
    pending,
    missing,
    percentage: Math.round((verified / total) * 100),
    phase0Ready,
    phase1Ready,
    phase2Ready,
    phase3Ready,
    isFullyMonetized: phase0Ready && phase1Ready && phase2Ready && phase3Ready,
  }
}
