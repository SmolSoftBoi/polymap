import type { Metadata } from 'next'
import { SignInForm } from '@/components/SignInForm'

/** Metadata for the dashboard auth page. */
export const metadata: Metadata = {
  title: 'Dashboard login - Polymap',
  description: 'Authenticate to manage your polycule dashboard.'
}

/** Page prompting users to sign in before accessing the dashboard. */
export default function DashboardAuthPage() {
  return (
    <main className="grid flex-1 place-content-center p-8">
      <section className="w-full max-w-sm space-y-4">
        <h1 className="text-center text-2xl font-bold">Sign in to Dashboard 🔐</h1>
        <SignInForm />
      </section>
    </main>
  )
}
