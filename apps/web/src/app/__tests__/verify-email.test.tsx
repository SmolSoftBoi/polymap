import * as React from 'react'
import { render, screen } from '@testing-library/react'
import VerifyEmailPage from '../verify-email/page'

test('renders verify email heading', () => {
  render(<VerifyEmailPage />)
  expect(
    screen.getByRole('heading', { name: /verify your email/i })
  ).toBeInTheDocument()
})
