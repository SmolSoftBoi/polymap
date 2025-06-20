import type { Meta, StoryObj } from '@storybook/react';

import { HowItWorks } from './HowItWorks';

const meta: Meta<typeof HowItWorks> = {
  component: HowItWorks,
  title: 'Components/HowItWorks',
};
export default meta;

type Story = StoryObj<typeof HowItWorks>;

export const Default: Story = {
  args: {
    steps: [
      {
        icon: '💾',
        title: 'Upload data',
        description: 'Import your dataset in seconds.',
      },
      {
        icon: '🗺️',
        title: 'Visualize',
        description: 'Explore relationships on an interactive map.',
      },
      {
        icon: '🤝',
        title: 'Collaborate',
        description: 'Share insights with your team.',
      },
    ],
  },
};
