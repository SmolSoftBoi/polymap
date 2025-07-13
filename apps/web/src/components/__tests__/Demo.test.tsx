import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('../ForceGraph', () => ({
  ForceGraph: vi.fn(() => <div data-testid="fg" />),
}));

import { ForceGraph } from '../ForceGraph';
import { Demo } from '../Demo';

const mockFG = vi.mocked(ForceGraph);

describe('Demo', () => {
  it('shows message', () => {
    expect(() => render(<Demo message="Test" />)).not.toThrow();
    expect(screen.getByText('Test 😊')).toBeInTheDocument();
  });

  it('passes node values to ForceGraph', () => {
    render(<Demo />);
    expect(mockFG).toHaveBeenCalled();
    const firstCall = mockFG.mock.calls[0] as unknown[];
    const { nodes } = (firstCall[0] as { data: { nodes: { val?: number }[] } }).data;
    for (const node of nodes) {
      expect(node.val).toBeDefined();
    }
  });

  it('passes link names to ForceGraph', () => {
    render(<Demo />);
    expect(mockFG).toHaveBeenCalled();
    const firstCall = mockFG.mock.calls[0] as unknown[];
    const { links } = (firstCall[0] as { data: { links: { name?: string }[] } }).data;
    for (const link of links) {
      expect(link.name).toBeDefined();
    }
  });
});
