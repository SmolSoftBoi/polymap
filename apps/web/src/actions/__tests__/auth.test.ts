import { vi, expect, it, describe } from 'vitest'

vi.mock('@supabase/auth-helpers-nextjs', () => ({
  createServerActionClient: () => ({
    auth: { signInWithOtp: vi.fn(async () => ({ error: null })) }
  })
}))

describe('sendMagicLink', () => {
  it('prevents rapid repeated requests', async () => {
    const { sendMagicLink } = await import('../auth')
    const first = await sendMagicLink('a@b.com')
    const second = await sendMagicLink('a@b.com')
    expect(first.error).toBeNull()
    expect(second.error).toMatch(/wait/i)
  })
})

