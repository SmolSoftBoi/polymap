import { render, screen } from '@testing-library/react'
import DashboardPage from '../dashboard/page'
import { vi } from 'vitest'

vi.mock('../../utils/auth', () => ({ requireAuthentication: vi.fn() }))

test('renders dashboard heading', async () => {
  render(await DashboardPage())
  expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument()
})
