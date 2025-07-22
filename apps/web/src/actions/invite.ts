'use server'

import jwt from 'jsonwebtoken'

const jwtSecret = process.env.SUPABASE_JWT_SECRET ?? ''

export interface InviteTokenParams {
  email: string
  /** Expiry time in seconds. Defaults to 10 minutes. */
  expiresIn?: number
}

/**
 * Generates a short-lived invite JWT for the given email.
 */
export function generateInviteToken({ email, expiresIn = 600 }: InviteTokenParams): string {
  return jwt.sign({ email, type: 'invite' }, jwtSecret, { expiresIn })
}
