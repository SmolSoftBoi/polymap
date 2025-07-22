'use client'

import { type FormEvent, type FC, useState } from 'react'
import { signIn } from '@/actions/auth'

/** Props for {@link SignInForm}. */
export interface SignInFormProps {
  /** Called when sign in succeeds. */
  onSuccess?: () => void
}

/**
 * Collects email and password then signs the user in via Supabase.
 */
export const SignInForm: FC<SignInFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [welcome, setWelcome] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const { error, welcome: firstLogin } = await signIn({ email, password })
    if (error) {
      setError(error)
      return
    }
    if (firstLogin) {
      setWelcome(true)
    }
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="signin-email">Email</label>
        <input
          id="signin-email"
          type="email"
          className="rounded border px-2 py-1"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="signin-password">Password</label>
        <input
          id="signin-password"
          type="password"
          className="rounded border px-2 py-1"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {welcome && (
        <p className="text-sm text-green-600">Welcome to Polymap 🎉</p>
      )}
      <button type="submit" className="rounded bg-primary px-4 py-2 text-white">
        Sign In
      </button>
    </form>
  )
}
