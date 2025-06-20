import { render, screen } from '@testing-library/react';

import { Footer } from '../Footer';

const links = [{ href: '/about', label: 'About' }];

describe('Footer', () => {
  it('shows link and copyright', () => {
    const year = new Date().getFullYear();
    render(<Footer links={links} />);
    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toHaveAttribute('href', '/about');
    expect(screen.getByText(`© ${year} Polymap`)).toBeInTheDocument();
  });
});
