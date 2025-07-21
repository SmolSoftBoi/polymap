import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { requireAuthentication } from '@/utils/auth'

/** Metadata for the dashboard page. */
export const metadata: Metadata = {
  title: 'Dashboard - Polymap',
  description: 'Overview of your polycule maps.'
}

/** Page displaying the user dashboard. */
export default async function DashboardPage() {
  await requireAuthentication()
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()
  const email = user?.email ?? null
  return (
    <main className="grid flex-1 place-content-center space-y-2 p-8">
      <h1 className="text-2xl font-bold">Dashboard 🗺️</h1>
      {email && <p>Signed in as {email}</p>}
    </main>
  )
}
