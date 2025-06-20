import type { Meta, StoryObj } from '@storybook/react';

import { Testimonials } from './Testimonials';

const meta: Meta<typeof Testimonials> = {
  component: Testimonials,
  title: 'Components/Testimonials',
};
export default meta;

type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  args: {
    testimonials: [
      { quote: 'This app rocks!', author: 'Alice' },
      { quote: 'Amazing experience', author: 'Bob' },
    ],
  },
};
