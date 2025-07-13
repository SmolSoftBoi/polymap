import { render } from '@testing-library/react';
import { vi } from 'vitest';

const mockFG = vi.fn(() => <div data-testid="fg" />);
vi.mock('react-force-graph-2d', () => ({ default: mockFG }));

import { ForceGraph } from '../ForceGraph';

describe('ForceGraph', () => {
  it('renders without crashing', () => {
    expect(() =>
      render(<ForceGraph data={{ nodes: [], links: [] }} />)
    ).not.toThrow();
  });

  it('provides a full-size wrapper', () => {
    const { container } = render(
      <div style={{ width: '320px', height: '180px' }}>
        <ForceGraph data={{ nodes: [], links: [] }} />
      </div>
    );
    expect(container.querySelector('.h-full.w-full')).toBeInTheDocument();
  });

  it('accepts nodeAutoColorBy prop', () => {
    expect(() =>
      render(
        <ForceGraph data={{ nodes: [], links: [] }} nodeAutoColorBy="group" />
      )
    ).not.toThrow();
  });
});
