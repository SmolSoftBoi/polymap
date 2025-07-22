import type { Metadata } from 'next'
import { InviteAuthForm } from '@/components/InviteAuthForm'
import { decodeInviteToken } from '@/actions/invite'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

/** Metadata for the invite page. */
export const metadata: Metadata = {
  title: 'Invitation - Polymap',
  description: 'Complete your invite to join Polymap.',
}

/** Page for completing an invite with a token. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function InvitePage({ params }: any) {
  const payload = decodeInviteToken(params.token)
  let mapName: string | null = null
  if (payload) {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase
      .from('maps')
      .select('name')
      .eq('id', payload.mapId)
      .maybeSingle()
    mapName = (data as { name?: string } | null)?.name ?? null
  }
  return (
    <main className="grid flex-1 place-content-center p-8">
      <section className="w-full max-w-sm space-y-4">
        <h1 className="text-center text-2xl font-bold">
          {mapName ? `Join ${mapName}` : 'Finish setting up'}
        </h1>
        <InviteAuthForm token={params.token} />
      </section>
    </main>
  )
}

