// Stub AFRAME before importing the graph to avoid runtime errors.
(globalThis as { AFRAME?: Record<string, unknown> }).AFRAME = {};
import { render } from '@testing-library/react';
import { ForceGraph } from '../ForceGraph';

describe('ForceGraph', () => {
  it('renders without crashing', () => {
    expect(() =>
      render(<ForceGraph data={{ nodes: [], links: [] }} />)
    ).not.toThrow();
  });
});
