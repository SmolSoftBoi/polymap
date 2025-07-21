import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('../../actions/auth', () => ({ signOut: vi.fn() }));
const signOut = vi.fn(async () => ({ error: null }));
const onAuthStateChange = vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } }));
const getUser = vi.fn(async () => ({ data: { user: null } }));

vi.mock('../../utils/supabase', () => ({
  getSupabaseClient: () => ({ auth: { signOut, onAuthStateChange, getUser } })
}));

import { Header } from '../Header';

describe('Header', () => {
  it('links home with title', () => {
    render(<Header title="Polymap" />);
    const link = screen.getByRole('link', { name: 'Polymap' });
    expect(link).toHaveAttribute('href', '/');
  });

  it('shows user menu', () => {
    render(<Header title="Polymap" />);
    expect(screen.getByRole('button', { name: 'Account' })).toBeVisible();
  });
});

