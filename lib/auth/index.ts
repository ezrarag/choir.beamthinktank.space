export type AuthRole = 'visitor' | 'participant' | 'faculty' | 'rep' | 'admin'

export function hasRole(required: AuthRole, current?: AuthRole): boolean {
  return required === current
}
