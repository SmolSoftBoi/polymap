import { type NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

/**
 * Handles the Supabase OAuth callback and stores the session in a cookie.
 */
export async function GET(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies })
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }
  return NextResponse.redirect(new URL('/', request.url))
}
