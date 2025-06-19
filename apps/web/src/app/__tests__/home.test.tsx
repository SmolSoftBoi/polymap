import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';

it('shows deploy button', () => {
  render(<Home />);
  expect(screen.getByRole('link', { name: /deploy now/i })).toBeInTheDocument();
});
