'use client'

import { useState, useEffect, type FC } from 'react'
import Link from 'next/link'
import { getSupabaseClient } from '@/utils/supabase'
import { signOut as signOutAction } from '@/actions/auth'

/** Props for {@link UserMenu}. */
export type UserMenuProps = Record<string, never>

/**
 * Shows authentication options with sign in/up links or a sign out button.
 */
export const UserMenu: FC<UserMenuProps> = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const supabase = getSupabaseClient()
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      setEmail(data.user?.email ?? null)
    }
    fetchUser()
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null)
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    await Promise.all([signOutAction(), getSupabaseClient().auth.signOut()])
    setEmail(null)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        className="rounded px-3 py-2"
        onClick={() => setOpen(!open)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {email ?? 'Account'}
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-48 rounded border bg-background text-foreground shadow">
          {email ? (
            <li>
              <button
                role="menuitem"
                onClick={handleSignOut}
                className="block w-full px-4 py-2 text-left hover:bg-muted"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link role="menuitem" className="block px-4 py-2 hover:bg-muted" href="/signin">
                  Sign In
                </Link>
              </li>
              <li>
                <Link role="menuitem" className="block px-4 py-2 hover:bg-muted" href="/signup">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  )
}
