import { InviteAuthForm } from '@/components/InviteAuthForm'

/** Page for completing an invite with a token. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function InvitePage({ params }: any) {
  return (
    <main className="grid flex-1 place-content-center p-8">
      <section className="w-full max-w-sm space-y-4">
        <h1 className="text-center text-2xl font-bold">Finish setting up</h1>
        <InviteAuthForm token={params.token} />
      </section>
    </main>
  )
}
