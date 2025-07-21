import type { Metadata } from 'next'
import { requireAuthentication } from '@/utils/auth'

/** Metadata for the map editor page. */
export const metadata: Metadata = {
  title: 'Map - Polymap',
  description: 'Build and explore your polycule map.'
}

/** Page displaying the map editor. */
export default async function MapPage() {
  await requireAuthentication()
  return (
    <main className="grid flex-1 place-content-center p-8">
      <h1 className="text-2xl font-bold">Map Editor 🗺️</h1>
    </main>
  )
}
