import { render, screen } from '@testing-library/react';

import { Demo } from '../Demo';

describe('Demo', () => {
  it('shows message', () => {
    expect(() => render(<Demo message="Test" />)).not.toThrow();
    expect(screen.getByText('Test 😊')).toBeInTheDocument();
  });
});
