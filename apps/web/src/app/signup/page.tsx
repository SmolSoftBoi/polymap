import type { Metadata } from 'next'
import { SignUpForm } from '@/components/SignUpForm'

/** Metadata for the sign-up page. */
export const metadata: Metadata = {
  title: 'Create account - Polymap',
  description: 'Sign up to visualise and share your polycule.',
}

/** Page allowing users to register. */
export default function SignUpPage() {
  return (
    <main className="grid flex-1 place-content-center p-8">
      <section className="w-full max-w-sm space-y-4">
        <h1 className="text-center text-2xl font-bold">Join Polymap 🎉</h1>
        <SignUpForm />
      </section>
    </main>
  )
}
