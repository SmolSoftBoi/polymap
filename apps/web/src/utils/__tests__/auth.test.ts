import { vi } from 'vitest'

const headersMock = vi.fn()
vi.mock('next/headers', () => ({ headers: () => headersMock() }))
const redirectMock = vi.fn()
vi.mock('next/navigation', () => ({ redirect: (...args: unknown[]) => redirectMock(...args) }))

import { requireAuthentication } from '../auth'

afterEach(() => {
  vi.clearAllMocks()
})

it('redirects when user header missing', async () => {
  headersMock.mockResolvedValue(new Headers())
  await requireAuthentication()
  expect(redirectMock).toHaveBeenCalledWith('/signin')
})

it('redirects when email not verified', async () => {
  headersMock.mockResolvedValue(new Headers({ 'x-user-id': '1' }))
  await requireAuthentication()
  expect(redirectMock).toHaveBeenCalledWith('/verify-email')
})

it('does nothing when verified', async () => {
  headersMock.mockResolvedValue(
    new Headers({ 'x-user-id': '1', 'x-email-verified': 'true' })
  )
  await requireAuthentication()
  expect(redirectMock).not.toHaveBeenCalled()
})
