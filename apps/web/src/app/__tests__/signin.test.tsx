import * as React from 'react'
import { render, screen } from '@testing-library/react'
import SignInPage from '../signin/page'

test('renders sign in form', () => {
  render(<SignInPage />)
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
})
