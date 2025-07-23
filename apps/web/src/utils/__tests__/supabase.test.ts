import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const ORIGINAL_ENV = process.env

describe('getSupabaseClient', () => {
  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV, NEXT_PUBLIC_SUPABASE_URL: 'http://localhost', NEXT_PUBLIC_SUPABASE_ANON_KEY: 'anon' }
  })

  afterEach(() => {
    process.env = ORIGINAL_ENV
    vi.resetModules()
  })

  it('returns the same instance on multiple calls', async () => {
    const { getSupabaseClient } = await import('../supabase')
    const first = getSupabaseClient()
    const second = getSupabaseClient()
    expect(first).toBe(second)
  })

  it('throws when environment variables are missing', async () => {
    process.env = {} as NodeJS.ProcessEnv
    const { getSupabaseClient } = await import('../supabase')
    expect(() => getSupabaseClient()).toThrow('Supabase credentials missing')
  })
})
