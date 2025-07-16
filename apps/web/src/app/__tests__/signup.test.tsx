import * as React from 'react'
import { render, screen } from '@testing-library/react'
import SignUpPage from '../signup/page'

test('renders sign up form', () => {
  render(<SignUpPage />)
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
})
