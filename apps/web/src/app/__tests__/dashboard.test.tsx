import * as React from 'react'
import { render, screen } from '@testing-library/react'
import DashboardPage from '../dashboard/page'

test('renders dashboard heading', () => {
  render(<DashboardPage />)
  expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument()
})
