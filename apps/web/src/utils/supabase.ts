import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

let client: SupabaseClient | undefined

/**
 * Returns a singleton Supabase client using environment configuration.
 */
export const getSupabaseClient = (): SupabaseClient => {
  if (!client) {
    client = createClientComponentClient()
  }
  return client
}
