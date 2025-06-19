import { render, screen } from '@testing-library/react';
import NotFound from '../not-found';

test('links back to home', () => {
  render(<NotFound />);
  expect(screen.getByRole('link', { name: /return home/i })).toBeInTheDocument();
});
