'use client';

import type { FC } from 'react';
import { ForceGraph, type ForceGraphNode, type ForceGraphLink } from './ForceGraph';

const demoData: { nodes: ForceGraphNode[]; links: ForceGraphLink[] } = {
  nodes: [
    { id: 'KMK', name: 'Kris', val: 5 },
    { id: 'PMK', name: 'Paul', val: 4 },
    { id: 'ZM', name: 'Zach', val: 3 },
    { id: 'JL', name: 'James', val: 3 },
    { id: 'JK', name: 'Josh', val: 2 },
    { id: 'SB', name: 'Sean', val: 1 },
    { id: 'J', name: 'Josh', val: 2 }
  ],
  links: [
    { source: 'KMK', target: 'PMK', name: 'Husband' },
    { source: 'KMK', target: 'ZM', name: 'Boyfriend' },
    { source: 'KMK', target: 'JL', name: 'Boyfriend' },
    { source: 'PMK', target: 'ZM', name: 'Boyfriend' },
    { source: 'PMK', target: 'JL', name: 'Boyfriend' },
    { source: 'JL', target: 'JK', name: 'Boyfriend' },
    { source: 'JK', target: 'SB', name: 'Boyfriend' },
    { source: 'ZM', target: 'J', name: 'Boyfriend' },
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
        <ForceGraph
          data={demoData}
          nodeAutoColorBy={"id"}
          linkAutoColorBy="name"
        />
      </div>
    </div>
  );
};
