import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '' }),
  Geist_Mono: () => ({ variable: '' })
}));

vi.mock('../../actions/auth', () => ({ signOut: vi.fn() }));
const signOut = vi.fn(async () => ({ error: null }));
const onAuthStateChange = vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } }));
const getUser = vi.fn(async () => ({ data: { user: null } }));

vi.mock('../../utils/supabase', () => ({
  getSupabaseClient: () => ({ auth: { signOut, onAuthStateChange, getUser } })
}));

import RootLayout from '../layout';

it('renders children', () => {
  render(
    <RootLayout>
      <span>child</span>
    </RootLayout>
  );
  expect(screen.getByText('child')).toBeInTheDocument();
});
