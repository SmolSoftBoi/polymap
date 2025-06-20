import type { Meta, StoryObj } from '@storybook/react';

import { FeatureHighlights } from './FeatureHighlights';

const meta: Meta<typeof FeatureHighlights> = {
  component: FeatureHighlights,
  title: 'Components/FeatureHighlights',
};
export default meta;

type Story = StoryObj<typeof FeatureHighlights>;

export const Default: Story = {
  args: {
    features: [
      { icon: '🚀', text: 'Fast' },
      { icon: '🔒', text: 'Secure' },
      { icon: '⚡', text: 'Efficient' },
    ],
  },
};
