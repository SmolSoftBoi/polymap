'use client';

import Link from 'next/link';
import type { FC } from 'react';

/** Props for {@link Header}. */
export interface HeaderProps {
  /** Title shown in the header. */
  title: string;
}

/**
 * Renders the application header with a home link.
 */
export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-background px-4 py-2 text-foreground">
      <Link className="text-xl font-bold no-underline" href="/">
        {title}
      </Link>
    </header>
  );
};

