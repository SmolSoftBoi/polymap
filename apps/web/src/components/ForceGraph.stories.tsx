import type { Meta, StoryObj } from '@storybook/react';
import { ForceGraph } from './ForceGraph';

const meta: Meta<typeof ForceGraph> = {
  component: ForceGraph,
  title: 'Components/ForceGraph',
};
export default meta;

type Story = StoryObj<typeof ForceGraph>;

export const Default: Story = {
  args: {
    data: {
      nodes: [{ id: '1' }, { id: '2' }],
      links: [{ source: '1', target: '2' }],
    },
    nodeAutoColorBy: 'id',
  },
};
