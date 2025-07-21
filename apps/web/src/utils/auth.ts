import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

/**
 * Redirects unauthenticated requests to the sign in page.
 *
 * The middleware exposes the authenticated user via the `x-user-id` header.
 */
export async function requireAuthentication(): Promise<void> {
  const hdrs = await headers()
  const userId = hdrs.get('x-user-id')
  if (!userId) {
    redirect('/signin')
  }
  const verified = hdrs.get('x-email-verified')
  if (verified !== 'true') {
    redirect('/verify-email')
  }
}
