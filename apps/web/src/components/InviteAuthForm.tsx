'use client'

import { type FormEvent, type FC, useState } from 'react'
import { getSupabaseClient } from '@/utils/supabase'

/** Props for {@link InviteAuthForm}. */
export interface InviteAuthFormProps {
  /** Invite token from the email link. */
  token: string
  /** Called when the invite is accepted successfully. */
  onSuccess?: () => void
}

/**
 * Lets a user complete sign up via an invite token.
 */
export const InviteAuthForm: FC<InviteAuthFormProps> = ({ token, onSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const { error: verifyError } = await getSupabaseClient().auth.verifyOtp({
      email,
      token,
      type: 'invite'
    })
    if (verifyError) {
      setError(verifyError.message)
      return
    }
    const { error: updateError } = await getSupabaseClient().auth.updateUser({
      password
    })
    if (updateError) {
      setError(updateError.message)
      return
    }
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="invite-email">Email</label>
        <input
          id="invite-email"
          type="email"
          className="rounded border px-2 py-1"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="invite-password">Password</label>
        <input
          id="invite-password"
          type="password"
          className="rounded border px-2 py-1"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" className="rounded bg-primary px-4 py-2 text-white">
        Join 🎉
      </button>
    </form>
  )
}
