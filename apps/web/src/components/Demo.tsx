'use client';

import type { FC } from 'react';
import type { LinkObject } from 'force-graph';
import { ForceGraph, type ForceGraphNode } from './ForceGraph';

const demoData: { nodes: ForceGraphNode[]; links: LinkObject[] } = {
  nodes: [
    { id: 'you', name: 'You' },
    { id: 'partner', name: 'Partner' },
    { id: 'friend', name: 'Friend' },
  ],
  links: [
    { source: 'you', target: 'partner' },
    { source: 'you', target: 'friend' },
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
