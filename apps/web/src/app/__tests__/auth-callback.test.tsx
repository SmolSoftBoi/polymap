import * as React from 'react'
import { render } from '@testing-library/react'
import { waitFor, screen } from '@testing-library/react'
import { vi } from 'vitest'

const exchangeCodeForSession = vi.fn(async () => ({ error: null }))
const replace = vi.fn()

vi.mock('../../utils/supabase', () => ({
  getSupabaseClient: () => ({ auth: { exchangeCodeForSession } })
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace }),
  useSearchParams: () => new URLSearchParams('code=abc')
}))

import AuthCallbackPage from '../auth/callback/page'

test('exchanges code and redirects', async () => {
  render(<AuthCallbackPage />)
  await waitFor(() => {
    expect(exchangeCodeForSession).toHaveBeenCalledWith('abc')
    expect(replace).toHaveBeenCalledWith('/')
  })
  expect(screen.getByText(/redirecting/i)).toBeInTheDocument()
})
