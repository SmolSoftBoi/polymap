'use client';

import dynamic from 'next/dynamic';
import type { NodeObject, LinkObject } from 'force-graph';
import { type FC, useEffect, useRef, useState } from 'react';

const ForceGraph2D = dynamic(
  () => import('react-force-graph-2d').then(mod => mod.default),
  { ssr: false }
);

/** Props for {@link ForceGraph}. */
export interface ForceGraphNode extends NodeObject {
  /** Optional display name for the node. */
  name?: string;
  /** Optional numeric value used for node sizing. */
  val?: number;
}

export interface ForceGraphLink extends LinkObject {
  /** Optional display name for the link. */
  name?: string;
}

export interface ForceGraphProps {
  data: { nodes: ForceGraphNode[]; links: ForceGraphLink[] };
  /**
   * Auto-assign node colors by this field.
   *
   * Accepts a key string or accessor function.
  */
  nodeAutoColorBy?: string | ((node: ForceGraphNode) => string | null) | null;
  /**
   * Auto-assign link colors by this field.
   *
   * Accepts a key string or accessor function.
   */
  linkAutoColorBy?: string | ((link: ForceGraphLink) => string | null) | null;
}

/**
 * Renders an interactive force-directed graph.
 */
export const ForceGraph: FC<ForceGraphProps> = ({
  data,
  nodeAutoColorBy,
  linkAutoColorBy,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const update = () => {
      setSize({ width: el.clientWidth, height: el.clientHeight });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-full w-full">
      {size.width > 0 && size.height > 0 && (
        <ForceGraph2D
          graphData={data}
          width={size.width}
          height={size.height}
          nodeAutoColorBy={nodeAutoColorBy}
          linkAutoColorBy={linkAutoColorBy}
        />
      )}
    </div>
  );
};
