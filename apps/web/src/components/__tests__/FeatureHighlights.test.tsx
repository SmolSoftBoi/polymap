import { render, screen } from '@testing-library/react';
import { FeatureHighlights } from '../FeatureHighlights';

const features = [
  { icon: '🚀', text: 'Fast' },
  { icon: '🔒', text: 'Secure' }
];

describe('FeatureHighlights', () => {
  it('renders feature list', () => {
    render(<FeatureHighlights features={features} />);
    expect(screen.getByText('Fast')).toBeInTheDocument();
    expect(screen.getByText('Secure')).toBeInTheDocument();
  });
});
