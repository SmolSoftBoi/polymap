import { SignInForm } from '@/components/SignInForm'

/** Page allowing users to sign in. */
export default function SignInPage() {
  return (
    <main className="grid flex-1 place-content-center p-8">
      <section className="w-full max-w-sm space-y-4">
        <h1 className="text-center text-2xl font-bold">Welcome back</h1>
        <SignInForm />
      </section>
    </main>
  )
}
