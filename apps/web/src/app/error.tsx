'use client';

// `Link` uses router context which may be unavailable during error rendering.
// Use a regular anchor instead to avoid runtime crashes.
import type { AnchorHTMLAttributes } from 'react';

function HomeLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    /* eslint-disable-next-line @next/next/no-html-link-for-pages */
    <a {...props} href="/" className="text-blue-600 underline block mt-2" />
  );
}

export interface ErrorPageProps {
  /** Error thrown during rendering. */
  error: Error;
  /** Resets the error boundary. */
  reset: () => void;
}

/** Global error boundary component. */
export default function GlobalError({ error, reset }: ErrorPageProps) {
  return (
    <div className="min-h-screen grid place-content-center text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Something went wrong 😵‍💫</h2>
      <p className="text-red-600 mb-4" role="alert">
        {error.message}
      </p>
      <button className="text-blue-600 underline" onClick={reset}>
        Try again
      </button>
      <HomeLink>Return home</HomeLink>
    </div>
  );
}
