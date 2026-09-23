/**
 * Choral Participant Role Taxonomy & Monetization Readiness Types
 * Grounded in: Chorus America, ACDA, AGMA, MOLA, GMWA, NATS
 */

export type ChoralGuildId =
  | 'artistic_performance'
  | 'composition_library'
  | 'production_engineering'
  | 'business_operations'
  | 'vocal_health_education'
  | 'originator_client'

export interface ChoralGuildMeta {
  id: ChoralGuildId
  name: string
  shortLabel: string
  description: string
  governingStandards: string[]
}

export const CHORAL_GUILDS_META: Record<ChoralGuildId, ChoralGuildMeta> = {
  artistic_performance: {
    id: 'artistic_performance',
    name: 'Artistic Leadership & Vocal Performance Guild',
    shortLabel: 'Artistic & Voices',
    description: 'Ensemble direction, section vocal captains, tutti chorister pool, and sacred accompaniment.',
    governingStandards: ['ACDA', 'AGMA', 'Chorus America'],
  },
  composition_library: {
    id: 'composition_library',
    name: 'Composition, Arrangement & Choral Library Guild',
    shortLabel: 'Arranging & Library',
    description: 'Vocal arranging, polyphonic voicing, octavo engraving, and CCLI/ASCAP performance licensing.',
    governingStandards: ['MOLA', 'ACDA', 'ASCAP/BMI/CCLI'],
  },
  production_engineering: {
    id: 'production_engineering',
    name: 'Production, Vocal Stem Engineering & Sanctuary Stage Ops',
    shortLabel: 'Staging & Stems',
    description: 'Roster contracting, riser geometry, robe master, cathedral acoustics, and isolated S/A/T/B stem tracking.',
    governingStandards: ['AGMA Work Rules', 'AES'],
  },
  business_operations: {
    id: 'business_operations',
    name: 'Operations, Business, Legal & Governance Guild',
    shortLabel: 'Operations & Legal',
    description: 'Fiduciary governance, institutional presenter contracts, singer releases, split sheets, and payroll.',
    governingStandards: ['Chorus America Management Standards', '501(c)(3) Compliance'],
  },
  vocal_health_education: {
    id: 'vocal_health_education',
    name: 'Vocal Health, Choral Education & Community Guild',
    shortLabel: 'Vocal Health & Youth',
    description: 'Vocal science, recovery protocols, choral youth fellowships, and interfaith community chorales.',
    governingStandards: ['NATS', 'ACDA Pedagogy', 'Chorus America Education'],
  },
  originator_client: {
    id: 'originator_client',
    name: 'Commissioning Client & Originator Guild',
    shortLabel: 'Clients & Originators',
    description: 'Contemporary producers commissioning vocal layers, symphonic orchestras contracting choir augmentation, and sanctuary partners.',
    governingStandards: ['BEAM Cross-Domain Protocol'],
  },
}

export type ChoralRoleId =
  // Guild 1: Artistic
  | 'choral_director_conductor'
  | 'associate_choral_conductor'
  | 'soprano_section_leader'
  | 'alto_section_leader'
  | 'tenor_section_leader'
  | 'bass_section_leader'
  | 'tutti_chorister'
  | 'auxiliary_chorister'
  | 'guest_soloist_cantor'
  | 'rehearsal_accompanist'

  // Guild 2: Composition & Library
  | 'choral_composer'
  | 'vocal_arranger'
  | 'choral_copyist_engraver'
  | 'choral_music_librarian'
  | 'language_diction_coach'

  // Guild 3: Production & Stage
  | 'choral_personnel_manager'
  | 'choral_stage_robe_master'
  | 'acoustic_choral_engineer'
  | 'vocal_stem_mix_engineer'
  | 'broadcast_media_director'

  // Guild 4: Business & Legal
  | 'executive_director'
  | 'choral_operations_manager'
  | 'institutional_presenter_lead'
  | 'development_philanthropy_lead'
  | 'choral_ip_rights_counsel'
  | 'finance_payroll_controller'
  | 'box_office_patron_lead'

  // Guild 5: Education & Health
  | 'director_choral_education'
  | 'vocal_health_specialist'
  | 'choral_scholar_fellow'
  | 'community_sing_liaison'

  // Guild 6: Originator & Client
  | 'track_originator_producer'
  | 'symphonic_orchestra_client'
  | 'liturgical_sanctuary_partner'

export interface ChoralRoleDefinition {
  id: ChoralRoleId
  guildId: ChoralGuildId
  title: string
  governingBody: string
  description: string
  responsibilities: string[]
  complianceRequirements: string[]
}

export type MonetizationPhase =
  | 'phase_0_entity'
  | 'phase_1_compliance'
  | 'phase_2_roster'
  | 'phase_3_revenue'

export interface ChoralComplianceBadge {
  id: string
  phase: MonetizationPhase
  label: string
  description: string
  requiredRole: ChoralRoleId
  status: 'verified' | 'pending' | 'missing'
  verifiedDate?: string
  signatoryName?: string
  artifactUri?: string
}

export interface ChoralProjectStaffingRequirement {
  roleId: ChoralRoleId
  title: string
  guildId: ChoralGuildId
  assignedUserId?: string
  assignedUserName?: string
  status: 'filled' | 'pending_call' | 'required'
  isPrerequisiteForBilling: boolean
}
