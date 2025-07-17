import { Suspense } from 'react'
import type { Metadata } from 'next'
import { AuthCallbackClient } from './AuthCallbackClient'

/** Metadata for the auth callback page. */
export const metadata: Metadata = {
  title: 'Auth callback - Polymap',
  description: 'Completes authentication and redirects you.',
}

/**
 * Wrapper page for the client-side auth handler.
 */
export default function AuthCallbackPage() {
  return (
    <Suspense>
      <AuthCallbackClient />
    </Suspense>
  )
}
