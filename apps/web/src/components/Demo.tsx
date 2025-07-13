'use client';

import type { FC } from 'react';
import type { LinkObject } from 'force-graph';
import { ForceGraph, type ForceGraphNode } from './ForceGraph';

const demoData: { nodes: ForceGraphNode[]; links: LinkObject[] } = {
  nodes: [
    { id: 'you', name: 'You', val: 2 },
    { id: 'partner', name: 'Partner', val: 1 },
    { id: 'friend', name: 'Friend', val: 1 },
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
 *
 * Nodes include a `val` attribute that controls their display size.
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
