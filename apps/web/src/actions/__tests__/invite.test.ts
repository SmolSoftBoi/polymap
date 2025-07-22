import { vi, describe, it, expect } from 'vitest'

const sign = vi.fn(() => 'tok')
const verify = vi.fn(() => ({ email: 'a@b.com', mapId: '1', type: 'invite' }))
vi.mock('jsonwebtoken', () => ({ default: { sign, verify } }))

describe('generateInviteToken', () => {
  it('creates token with expiry and map ID', async () => {
    const { generateInviteToken } = await import('../invite')
    generateInviteToken({ email: 'a@b.com', mapId: '1', expiresIn: 123 })
    expect(sign).toHaveBeenCalledWith(
      { email: 'a@b.com', mapId: '1', type: 'invite' },
      expect.any(String),
      { expiresIn: 123 }
    )
  })
})

describe('decodeInviteToken', () => {
  it('returns payload when valid', async () => {
    const { decodeInviteToken } = await import('../invite')
    const payload = decodeInviteToken('tok')
    expect(verify).toHaveBeenCalledWith('tok', expect.any(String))
    expect(payload?.mapId).toBe('1')
  })
})
