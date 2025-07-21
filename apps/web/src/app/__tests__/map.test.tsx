import { render, screen } from '@testing-library/react'
import MapPage from '../map/page'
import { vi } from 'vitest'

vi.mock('../../utils/auth', () => ({ requireAuthentication: vi.fn() }))

test('renders map heading', async () => {
  render(await MapPage())
  expect(screen.getByRole('heading', { name: /map editor/i })).toBeInTheDocument()
})
