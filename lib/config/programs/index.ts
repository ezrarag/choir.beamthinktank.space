import { chorusProgram } from '@/lib/config/programs/chorus'
import { orchestraProgram } from '@/lib/config/programs/orchestra'
import type { Program } from '@/types/domain'

const programsBySlug: Record<string, Program> = {
  [orchestraProgram.slug]: orchestraProgram,
  [chorusProgram.slug]: chorusProgram,
}

export function getProgramBySlug(slug: string): Program {
  return programsBySlug[slug] ?? chorusProgram
}

export function getActiveProgram(): Program {
  const slug = process.env.NEXT_PUBLIC_PROGRAM_SLUG ?? 'chorus'
  return getProgramBySlug(slug)
}

export { programsBySlug, chorusProgram, orchestraProgram }
