import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '' }),
  Geist_Mono: () => ({ variable: '' })
}));

import { RootLayout } from '../components/RootLayout';

it('renders children', () => {
  render(
    <RootLayout>
      <span>child</span>
    </RootLayout>
  );
  expect(screen.getByText('child')).toBeInTheDocument();
});
