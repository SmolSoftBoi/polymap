'use client';

import dynamic from 'next/dynamic';
import type { NodeObject, LinkObject } from 'force-graph';
import type { FC } from 'react';

interface AFrameStub {
  components: Record<string, unknown>;
  registerComponent: () => void;
  utils: { diff: () => Record<string, never> };
}

// Stub AFRAME so optional AR modules don't throw in the browser.
const globalObj = globalThis as { AFRAME?: AFrameStub };
if (typeof globalObj !== 'undefined' && !globalObj.AFRAME) {
  globalObj.AFRAME = {
    components: {},
    registerComponent: () => {},
    utils: { diff: () => ({}) },
  };
}


const ForceGraph2D = dynamic(
  () => import('react-force-graph').then(mod => mod.ForceGraph2D),
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
