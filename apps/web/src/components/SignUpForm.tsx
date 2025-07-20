'use client'

import { type FormEvent, type FC, useState } from 'react'
import { signUp } from '@/actions/auth'

/** Props for {@link SignUpForm}. */
export interface SignUpFormProps {
  /** Called when sign up succeeds. */
  onSuccess?: () => void
}

/**
 * Collects email and password then registers the user via Supabase.
 */
export const SignUpForm: FC<SignUpFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const { error } = await signUp({ email, password })
    if (error) {
      setError(error)
      return
    }
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          type="email"
          className="rounded border px-2 py-1"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          className="rounded border px-2 py-1"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" className="rounded bg-primary px-4 py-2 text-white">
        Sign Up
      </button>
    </form>
  )
}
