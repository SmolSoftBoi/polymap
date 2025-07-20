'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

interface Credentials {
  email: string
  password: string
}

/**
 * Signs the user in and stores the session in an HTTP-only cookie.
 */
export async function signIn({ email, password }: Credentials) {
  const supabase = createServerActionClient({ cookies })
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  return { error: error?.message ?? null }
}

/**
 * Registers the user and stores the session in an HTTP-only cookie.
 */
export async function signUp({ email, password }: Credentials) {
  const supabase = createServerActionClient({ cookies })
  const { error } = await supabase.auth.signUp({ email, password })
  return { error: error?.message ?? null }
}

/**
 * Signs the user out and clears the session cookie.
 */
export async function signOut() {
  const supabase = createServerActionClient({ cookies })
  return supabase.auth.signOut()
}
