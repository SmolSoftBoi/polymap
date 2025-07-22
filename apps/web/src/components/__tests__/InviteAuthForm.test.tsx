import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

const verifyOtp = vi.fn(async () => ({ data: null, error: null }))
const updateUser = vi.fn(async () => ({ data: null, error: null }))
vi.mock('../../utils/supabase', () => ({
  getSupabaseClient: () => ({ auth: { verifyOtp, updateUser } })
}))

global.fetch = vi.fn(async () =>
  new Response(JSON.stringify({ success: true }), { status: 200 })
) as unknown as typeof fetch

import { InviteAuthForm } from '../InviteAuthForm'

describe('InviteAuthForm', () => {
  it('verifies invite and sets password', async () => {
    render(<InviteAuthForm token="tok" />)
    await userEvent.type(screen.getByLabelText(/email/i), 'a@b.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'secret')
    await userEvent.click(screen.getByRole('button', { name: /join/i }))
    expect(verifyOtp).toHaveBeenCalledWith({
      email: 'a@b.com',
      token: 'tok',
      type: 'invite'
    })
    expect(updateUser).toHaveBeenCalledWith({ password: 'secret' })
    expect(global.fetch).toHaveBeenCalledWith('/api/invite/accept', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: 'tok' })
    })
  })
})
