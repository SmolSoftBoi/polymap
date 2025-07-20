import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

vi.mock('../../actions/auth', () => ({ signOut: vi.fn() }))
import { signOut as signOutAction } from '../../actions/auth'
const signOut = vi.fn(async () => ({ error: null }))
const onAuthStateChange = vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } }))
const getUser = vi.fn(async () => ({ data: { user: { email: 'a@b.com' } } }))

vi.mock('../../utils/supabase', () => ({
  getSupabaseClient: () => ({ auth: { signOut, onAuthStateChange, getUser } })
}))
// above vi.mock ensures signOutAction uses the mock from this import

import { UserMenu } from '../UserMenu'

describe('UserMenu', () => {
  it('signs out when clicked', async () => {
    render(<UserMenu />)
    await screen.findByRole('button', { name: 'a@b.com' })
    await userEvent.click(screen.getByRole('button', { name: 'a@b.com' }))
    await userEvent.click(screen.getByRole('menuitem', { name: /sign out/i }))
    expect(signOut).toHaveBeenCalled()
    expect(signOutAction).toHaveBeenCalled()
  })
})
