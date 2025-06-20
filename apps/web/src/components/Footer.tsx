'use client';

import Link from 'next/link';
import type { FC } from 'react';

/** A single footer link with label and URL. */
export interface FooterLink {
  /** Link destination. */
  href: string;
  /** Link text. */
  label: string;
}

/** Props for {@link Footer}. */
export interface FooterProps {
  /** Navigation links displayed in the footer. */
  links: FooterLink[];
}

/**
 * Renders the application footer with copyright and links.
 */
export const Footer: FC<FooterProps> = ({ links }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-2 text-sm text-gray-500">
      <nav className="flex flex-wrap justify-center gap-4">
        {links.map(link => (
          <Link
            key={link.href}
            className="hover:underline hover:underline-offset-4"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <span>© {year} Polymap</span>
    </footer>
  );
};
