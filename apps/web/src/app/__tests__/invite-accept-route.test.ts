import { NextRequest } from 'next/server'
import { vi } from 'vitest'

const getUser = vi.fn()
const insert = vi.fn()

vi.mock('@supabase/auth-helpers-nextjs', () => ({
  createRouteHandlerClient: () => ({
    auth: { getUser },
    from: () => ({ insert })
  })
}))

vi.mock('../../actions/invite', () => ({
  decodeInviteToken: () => ({ email: 'a@b.com', mapId: '1', type: 'invite' })
}))

import { POST } from '../api/invite/accept/route'

test('adds collaborator for authenticated user', async () => {
  getUser.mockResolvedValueOnce({ data: { user: { id: '1' } } })
  insert.mockResolvedValueOnce({ error: null })
  const req = new NextRequest('http://localhost/api/invite/accept', {
    method: 'POST',
    body: JSON.stringify({ token: 'tok' })
  })
  const res = await POST(req)
  expect(res.status).toBe(200)
  expect(insert).toHaveBeenCalledWith({ map_id: '1', user_id: '1' })
})
