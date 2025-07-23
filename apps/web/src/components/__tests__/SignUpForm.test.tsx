import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

vi.mock('../../actions/auth', () => ({ signUp: vi.fn(async () => ({ error: null })) }))
import { signUp } from '../../actions/auth'

import { SignUpForm } from '../SignUpForm'

describe('SignUpForm', () => {
  it('calls signUp with provided credentials', async () => {
    render(<SignUpForm />)
    await userEvent.type(screen.getByLabelText(/name/i), 'Alice')
    await userEvent.type(screen.getByLabelText(/email/i), 'c@d.com')
    await userEvent.type(screen.getByLabelText(/^password$/i), 'secret')
    await userEvent.type(screen.getByLabelText(/confirm password/i), 'secret')
    await userEvent.click(screen.getByRole('button', { name: /sign up/i }))
    expect(signUp).toHaveBeenCalledWith({
      email: 'c@d.com',
      password: 'secret',
      name: 'Alice'
    })
  })

  it('shows error if passwords do not match', async () => {
    vi.mocked(signUp).mockClear()
    render(<SignUpForm />)
    await userEvent.type(screen.getByLabelText(/name/i), 'Bob')
    await userEvent.type(screen.getByLabelText(/email/i), 'bob@a.com')
    await userEvent.type(screen.getByLabelText(/^password$/i), 'secret')
    await userEvent.type(screen.getByLabelText(/confirm password/i), 'other')
    await userEvent.click(screen.getByRole('button', { name: /sign up/i }))
    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument()
    expect(signUp).not.toHaveBeenCalled()
  })
})
