import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  it('links home with title', () => {
    render(<Header title="Polymap" />);
    const link = screen.getByRole('link', { name: 'Polymap' });
    expect(link).toHaveAttribute('href', '/');
  });
});

