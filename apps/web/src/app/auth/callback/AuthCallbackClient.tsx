'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { getSupabaseClient } from '@/utils/supabase'

/**
 * Exchanges the OAuth code for a session then redirects the user.
 */
export function AuthCallbackClient() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleAuth = async () => {
      const code = searchParams.get('code')
      if (!code) {
        router.replace('/signin')
        return
      }
      const { error } = await getSupabaseClient().auth.exchangeCodeForSession(code)
      router.replace(error ? '/signin' : '/')
    }
    void handleAuth()
  }, [searchParams, router])

  return (
    <main className="grid flex-1 place-content-center p-8">
      <p>Redirecting…</p>
    </main>
  )
}
