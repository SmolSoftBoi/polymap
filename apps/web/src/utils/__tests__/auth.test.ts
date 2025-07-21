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

it('does nothing when user header present', async () => {
  headersMock.mockResolvedValue(new Headers({ 'x-user-id': '1' }))
  await requireAuthentication()
  expect(redirectMock).not.toHaveBeenCalled()
})
