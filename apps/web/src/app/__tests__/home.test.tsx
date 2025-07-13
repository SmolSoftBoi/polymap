import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';

it('shows demo link', () => {
  render(<Home />);
  const link = screen.getByRole('link', { name: /try the demo/i });
  expect(link).toBeInTheDocument();
});
