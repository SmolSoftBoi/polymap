import { render, screen } from '@testing-library/react'
import DashboardPage from '../dashboard/page'
import { vi } from 'vitest'

const getUser = vi.fn()
vi.mock('@supabase/auth-helpers-nextjs', () => ({
  createServerComponentClient: () => ({ auth: { getUser } })
}))

getUser.mockResolvedValue({ data: { user: null } })

vi.mock('../../utils/auth', () => ({ requireAuthentication: vi.fn() }))

test('renders dashboard heading', async () => {
  render(await DashboardPage())
  expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument()
})

test('shows signed in email', async () => {
  getUser.mockResolvedValueOnce({ data: { user: { email: 'a@b.com' } } })
  render(await DashboardPage())
  expect(screen.getByText('Signed in as a@b.com')).toBeInTheDocument()
})
