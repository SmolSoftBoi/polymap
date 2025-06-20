'use client';

import type { FC } from 'react';

/** Props for {@link Demo}. */
export interface DemoProps {
  /** Message displayed by the demo. */
  message: string;
}

/**
 * Simple component that renders a message.
 */
export const Demo: FC<DemoProps> = ({ message }) => {
  return <p>{message}</p>;
};
