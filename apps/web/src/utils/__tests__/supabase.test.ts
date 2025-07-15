import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { getSupabaseClient } from '../supabase'

const ORIGINAL_ENV = process.env

describe('getSupabaseClient', () => {
  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV, NEXT_PUBLIC_SUPABASE_URL: 'http://localhost', NEXT_PUBLIC_SUPABASE_ANON_KEY: 'anon' }
  })

  afterEach(() => {
    process.env = ORIGINAL_ENV
  })

  it('returns the same instance on multiple calls', () => {
    const first = getSupabaseClient()
    const second = getSupabaseClient()
    expect(first).toBe(second)
  })
})
