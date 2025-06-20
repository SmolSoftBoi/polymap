import { render, screen } from '@testing-library/react';

// Stub AFRAME used by react-force-graph in jsdom.
(globalThis as { AFRAME?: Record<string, unknown> }).AFRAME = {};

import { Demo } from '../Demo';

describe('Demo', () => {
  it('shows message', () => {
    expect(() => render(<Demo message="Test" />)).not.toThrow();
    expect(screen.getByText('Test 😊')).toBeInTheDocument();
  });
});
