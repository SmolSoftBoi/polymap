import type { Metadata } from 'next'
import { requireAuthentication } from '@/utils/auth'

/** Metadata for the dashboard page. */
export const metadata: Metadata = {
  title: 'Dashboard - Polymap',
  description: 'Overview of your polycule maps.'
}

/** Page displaying the user dashboard. */
export default async function DashboardPage() {
  await requireAuthentication()
  return (
    <main className="grid flex-1 place-content-center p-8">
      <h1 className="text-2xl font-bold">Dashboard 🗺️</h1>
    </main>
  )
}
