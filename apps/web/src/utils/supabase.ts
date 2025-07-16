import { createClient, SupabaseClient } from '@supabase/supabase-js'

let client: SupabaseClient | undefined

/**
 * Returns a singleton Supabase client using environment configuration.
 */
export const getSupabaseClient = (): SupabaseClient => {
  if (client) {
    return client
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error('Supabase environment variables are not set.')
  }

  client = createClient(url, anonKey)
  return client
}
