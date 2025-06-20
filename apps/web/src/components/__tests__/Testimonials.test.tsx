import { render, screen } from '@testing-library/react';
import { Testimonials } from '../Testimonials';

describe('Testimonials', () => {
  it('shows quotes and authors', () => {
    render(
      <Testimonials
        testimonials={[
          { quote: 'Great!', author: 'Alice' },
          { quote: 'Love it', author: 'Bob' },
        ]}
      />
    );
    expect(screen.getByText('Great!')).toBeInTheDocument();
    expect(screen.getByText('Alice', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Love it')).toBeInTheDocument();
    expect(screen.getByText('Bob', { exact: false })).toBeInTheDocument();
  });
});
