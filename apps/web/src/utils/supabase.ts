import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

let client: SupabaseClient | undefined

/**
 * Returns a singleton Supabase client using environment configuration.
 */
export const getSupabaseClient = (): SupabaseClient => {
  if (client) {
    return client
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Supabase credentials missing. Provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    )
  }

  client = createClientComponentClient({
    supabaseUrl,
    supabaseKey,
  })

  return client
}
