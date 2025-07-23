'use server'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

interface SignInCredentials {
  email: string
  password: string
}

interface SignUpCredentials extends SignInCredentials {
  name: string
}

/**
 * Signs the user in and stores the session in an HTTP-only cookie.
 */
export async function signIn({ email, password }: SignInCredentials) {
  const supabase = createServerActionClient({ cookies })
  const {
    data,
    error
  } = await supabase.auth.signInWithPassword({ email, password })
  let welcome = false
  if (data.user?.user_metadata.firstLogin) {
    welcome = true
    await supabase.auth.updateUser({ data: { firstLogin: false } })
  }
  return { error: error?.message ?? null, welcome }
}

/**
 * Registers the user and stores the session in an HTTP-only cookie.
 */
export async function signUp({ email, password, name }: SignUpCredentials) {
  const supabase = createServerActionClient({ cookies })
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { firstLogin: true, name } }
  })
  return { error: error?.message ?? null }
}

/**
 * Signs the user out and clears the session cookie.
 */
export async function signOut() {
  const supabase = createServerActionClient({ cookies })
  return supabase.auth.signOut()
}

/**
 * Sends a magic login link if the rate limiter allows it.
 */
export async function sendMagicLink(email: string) {
  const { rateLimiter } = await import('@/utils/rateLimit')
  if (!rateLimiter.allow(email)) {
    return { error: 'Please wait before requesting another link.' }
  }
  const supabase = createServerActionClient({ cookies })
  const { error } = await supabase.auth.signInWithOtp({ email })
  return { error: error?.message ?? null }
}
