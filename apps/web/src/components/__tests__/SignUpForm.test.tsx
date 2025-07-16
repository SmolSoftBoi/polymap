import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

const signUp = vi.fn(async () => ({ data: null, error: null }))
vi.mock('../../utils/supabase', () => ({
  getSupabaseClient: () => ({ auth: { signUp } })
}))

import { SignUpForm } from '../SignUpForm'

describe('SignUpForm', () => {
  it('calls signUp with provided credentials', async () => {
    render(<SignUpForm />)
    await userEvent.type(screen.getByLabelText(/email/i), 'c@d.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'secret')
    await userEvent.click(screen.getByRole('button', { name: /sign up/i }))
    expect(signUp).toHaveBeenCalledWith({ email: 'c@d.com', password: 'secret' })
  })
})
