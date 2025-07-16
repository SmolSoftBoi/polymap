import * as React from 'react'
import { render, screen } from '@testing-library/react'
import InvitePage from '../invite/[token]/page'

test('passes token to invite form', () => {
  render(<InvitePage params={{ token: 'abc' }} />)
  expect(screen.getByRole('button', { name: /join/i })).toBeInTheDocument()
})
