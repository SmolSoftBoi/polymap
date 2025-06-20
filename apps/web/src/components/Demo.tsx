'use client';

import type { FC } from 'react';
import type { LinkObject, NodeObject } from 'force-graph';
import { ForceGraph } from './ForceGraph';

const demoData: { nodes: NodeObject[]; links: LinkObject[] } = {
  nodes: [
    { id: 'You' },
    { id: 'Partner' },
    { id: 'Friend' },
  ],
  links: [
    { source: 'You', target: 'Partner' },
    { source: 'You', target: 'Friend' },
  ],
} as const;

/** Props for {@link Demo}. */
export interface DemoProps {
  /** Message to display. */
  message?: string;
}

/**
 * Renders a small force-directed graph with an optional heading.
 */
export const Demo: FC<DemoProps> = ({ message = 'Example polycule' }) => {
  return (
    <div className="space-y-4 rounded border border-dashed border-gray-400 p-4 text-center">
      <p>{message} 😊</p>
      <div className="h-64">
        <ForceGraph data={demoData} />
      </div>
    </div>
  );
};
