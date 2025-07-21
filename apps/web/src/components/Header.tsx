'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { UserMenu } from '@/components/UserMenu';

/** Props for {@link Header}. */
export interface HeaderProps {
  /** Title shown in the header. */
  title: string;
}

/**
 * Renders the application header with a home link and user menu.
 */
export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-background text-foreground flex items-center justify-between px-4 py-2">
      <Link className="text-xl font-bold no-underline" href="/">
        {title}
      </Link>
      <UserMenu />
    </header>
  );
};
