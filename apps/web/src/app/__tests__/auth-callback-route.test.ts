import { NextRequest } from 'next/server'
import { vi } from 'vitest'

const exchangeCodeForSession = vi.fn(async () => ({}))
vi.mock('@supabase/auth-helpers-nextjs', () => ({
  createRouteHandlerClient: () => ({ auth: { exchangeCodeForSession } })
}))

import { GET } from '../auth/callback/route'

it('exchanges code and redirects', async () => {
  const request = new NextRequest('http://localhost/auth/callback?code=abc')
  const res = await GET(request)
  expect(exchangeCodeForSession).toHaveBeenCalledWith('abc')
  expect(res.headers.get('location')).toBe('http://localhost/')
  expect(res.status).toBe(307)
})
