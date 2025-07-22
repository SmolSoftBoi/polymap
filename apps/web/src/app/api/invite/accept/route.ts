import { type NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { decodeInviteToken } from '@/actions/invite'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Adds authenticated user as collaborator on the invited map.
 */
export async function POST(request: NextRequest) {
  const { token } = await request.json()
  const payload = decodeInviteToken(token)
  if (!payload) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
  }
  const supabase = createRouteHandlerClient({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { error } = await supabase
    .from('map_collaborators')
    .insert({ map_id: payload.mapId, user_id: user.id })
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ success: true })
}

