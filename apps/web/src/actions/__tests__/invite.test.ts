import { vi, describe, it, expect } from 'vitest'

const sign = vi.fn(() => 'tok')
vi.mock('jsonwebtoken', () => ({ default: { sign } }))

describe('generateInviteToken', () => {
  it('creates token with expiry', async () => {
    const { generateInviteToken } = await import('../invite')
    generateInviteToken({ email: 'a@b.com', expiresIn: 123 })
    expect(sign).toHaveBeenCalledWith({ email: 'a@b.com', type: 'invite' }, expect.any(String), { expiresIn: 123 })
  })
})
