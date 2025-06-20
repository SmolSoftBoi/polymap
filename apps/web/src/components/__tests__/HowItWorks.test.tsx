import { render, screen } from '@testing-library/react';

import { HowItWorks } from '../HowItWorks';

const steps = [
  { icon: '💾', title: 'Upload data', description: 'Import your dataset in seconds.' },
  { icon: '🗺️', title: 'Visualize', description: 'Explore relationships on an interactive map.' },
];

describe('HowItWorks', () => {
  it('shows step titles', () => {
    render(<HowItWorks steps={steps} />);
    expect(screen.getByText('Upload data')).toBeInTheDocument();
    expect(screen.getByText('Visualize')).toBeInTheDocument();
  });
});
