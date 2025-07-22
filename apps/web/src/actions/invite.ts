

import jwt from 'jsonwebtoken'

const jwtSecret = process.env.SUPABASE_JWT_SECRET ?? ''

export interface InviteTokenParams {
  email: string
  /** Map ID for the invitation. */
  mapId: string
  /** Expiry time in seconds. Defaults to 10 minutes. */
  expiresIn?: number
}

export interface InvitePayload {
  email: string
  mapId: string
  type: 'invite'
}

/**
 * Generates a short-lived invite JWT for the given email.
 */
export function generateInviteToken({ email, mapId, expiresIn = 600 }: InviteTokenParams): string {
  return jwt.sign({ email, mapId, type: 'invite' }, jwtSecret, { expiresIn })
}

/**
 * Decodes an invite JWT returning the payload or null if invalid.
 */
export function decodeInviteToken(token: string): InvitePayload | null {
  try {
    return jwt.verify(token, jwtSecret) as InvitePayload
  } catch {
    return null
  }
}

/**
 * Adds the current user as collaborator on a map using the invite token.
 */
export async function addCollaborator(token: string) {
  const { createServerActionClient } = await import('@supabase/auth-helpers-nextjs')
  const { cookies } = await import('next/headers')
  const supabase = createServerActionClient({ cookies })
  const payload = decodeInviteToken(token)
  if (!payload) return { error: 'Invalid token' }
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (!user) return { error: 'Unauthorized' }
  const { error } = await supabase
    .from('map_collaborators')
    .insert({ map_id: payload.mapId, user_id: user.id })
  return { error: error?.message ?? null }
}
