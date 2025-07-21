import { NextRequest } from 'next/server'
import { vi } from 'vitest'

const getUser = vi.fn()
const maybeSingle = vi.fn()

vi.mock('@supabase/auth-helpers-nextjs', () => ({
  createRouteHandlerClient: () => ({
    auth: { getUser },
    from: () => ({ select: () => ({ eq: () => ({ maybeSingle }) }) })
  })
}))

import { GET } from '../api/maps/[id]/route'

test('returns map data for user with access', async () => {
  getUser.mockResolvedValueOnce({ data: { user: { id: '1' } } })
  maybeSingle.mockResolvedValueOnce({ data: { id: '1' } })
  const res = await GET(new NextRequest('http://localhost/api/maps/1'))
  expect(res.status).toBe(200)
})

test('returns 401 when unauthenticated', async () => {
  getUser.mockResolvedValueOnce({ data: { user: null } })
  const res = await GET(new NextRequest('http://localhost/api/maps/1'))
  expect(res.status).toBe(401)
})

test('returns 404 when no map found', async () => {
  getUser.mockResolvedValueOnce({ data: { user: { id: '1' } } })
  maybeSingle.mockResolvedValueOnce({ data: null })
  const res = await GET(new NextRequest('http://localhost/api/maps/99'))
  expect(res.status).toBe(404)
})
