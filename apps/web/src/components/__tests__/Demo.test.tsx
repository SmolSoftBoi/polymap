import { render, screen } from '@testing-library/react';
import { Demo } from '../Demo';

describe('Demo', () => {
  it('renders the provided message', () => {
    render(<Demo message="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
