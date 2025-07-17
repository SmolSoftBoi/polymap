import * as React from 'react'
import { render, screen } from '@testing-library/react'
import DashboardAuthPage from '../dashboard/auth/page'

test('renders dashboard sign in form', () => {
  render(<DashboardAuthPage />)
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
})
