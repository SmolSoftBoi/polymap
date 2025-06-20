'use client';

import type { FC } from 'react';

/** Props for {@link Demo}. */
export interface DemoProps {
  /** Message to display. */
  message: string;
}

/**
 * Renders a simple demo block showing the message.
 */
export const Demo: FC<DemoProps> = ({ message }) => {
  return (
    <div className="rounded border border-dashed border-gray-400 p-4 text-center">
      {message} 😊
    </div>
  );
};
