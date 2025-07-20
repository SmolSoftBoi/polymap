import { NextRequest } from 'next/server'
import { afterEach, beforeEach, vi } from 'vitest'

const getUser = vi.fn(async () => ({ data: { user: { id: '1' } } }))
vi.mock('@supabase/auth-helpers-nextjs', () => ({
  createMiddlewareClient: () => ({ auth: { getUser } })
}))

import { middleware } from '../middleware'

describe('middleware', () => {
  const env = process.env

  beforeEach(() => {
    process.env = {
      ...env,
      NEXT_PUBLIC_SUPABASE_URL: 'http://localhost',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'anon'
    }
  })

  afterEach(() => {
    process.env = env
  })

  it('sets user header when session exists', async () => {
    const req = new NextRequest('http://localhost/')
    const res = await middleware(req)
    expect(getUser).toHaveBeenCalled()
    expect(res.headers.get('x-user-id')).toBe('1')
  })
})
