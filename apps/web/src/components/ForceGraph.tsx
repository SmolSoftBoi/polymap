'use client';

import dynamic from 'next/dynamic';
import type { NodeObject, LinkObject } from 'force-graph';
import type { FC } from 'react';

const ForceGraph2D = dynamic(
  () => import('react-force-graph-2d').then(mod => mod.default),
  { ssr: false }
);

/** Props for {@link ForceGraph}. */
export interface ForceGraphProps {
  data: { nodes: NodeObject[]; links: LinkObject[] };
}

/**
 * Renders an interactive force-directed graph.
 */
export const ForceGraph: FC<ForceGraphProps> = ({ data }) => {
  return <ForceGraph2D graphData={data} />;
};
