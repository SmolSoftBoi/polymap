import { type NextRequest, NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

/**
 * Refreshes the Supabase session and exposes the user ID on each response.
 */
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return res

  const supabase = createMiddlewareClient({ req, res })
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (user?.id) res.headers.set('x-user-id', user.id)
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}
