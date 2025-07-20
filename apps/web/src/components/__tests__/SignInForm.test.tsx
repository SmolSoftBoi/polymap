import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

vi.mock('../../actions/auth', () => ({ signIn: vi.fn(async () => ({ error: null })) }))
import { signIn } from '../../actions/auth'

import { SignInForm } from '../SignInForm'

describe('SignInForm', () => {
  it('calls signInWithPassword with provided credentials', async () => {
    render(<SignInForm />)
    await userEvent.type(screen.getByLabelText(/email/i), 'a@b.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'secret')
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
    expect(signIn).toHaveBeenCalledWith({ email: 'a@b.com', password: 'secret' })
  })
})
