import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../components/HomePage';

it('shows deploy button', () => {
  render(<HomePage />);
  expect(screen.getByRole('link', { name: /deploy now/i })).toBeInTheDocument();
});
