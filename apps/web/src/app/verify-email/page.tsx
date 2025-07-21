import type { Metadata } from 'next'

/** Metadata for the verify email page. */
export const metadata: Metadata = {
  title: 'Verify Email - Polymap',
  description: 'Confirm your email to access maps.'
}

/** Page prompting the user to verify their email address. */
export default function VerifyEmailPage() {
  return (
    <main className="grid flex-1 place-content-center p-8 space-y-4 text-center">
      <h1 className="text-2xl font-bold">Verify your email 📧</h1>
      <p>Check your inbox and refresh once verified.</p>
    </main>
  )
}
