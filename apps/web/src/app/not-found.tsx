
import type { AnchorHTMLAttributes } from 'react';

function HomeLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    /* eslint-disable-next-line @next/next/no-html-link-for-pages */
    <a {...props} href="/" className="text-blue-600 underline" />
  );
}

/**
 * Renders a 404 page with a link back home.
 * @returns The not-found component.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen grid place-content-center text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Page not found 🕵️‍♂️</h2>
      <HomeLink>Return home</HomeLink>
    </div>
  );
}

