import { render, screen } from '@testing-library/react';

import { Demo } from '../Demo';

describe('Demo', () => {
  it('shows message', () => {
    render(<Demo message="Test" />);
    expect(screen.getByText('Test 😊')).toBeInTheDocument();
  });
});
