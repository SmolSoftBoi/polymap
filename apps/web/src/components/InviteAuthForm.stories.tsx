import type { Meta, StoryObj } from '@storybook/react'
import { InviteAuthForm } from './InviteAuthForm'

const meta: Meta<typeof InviteAuthForm> = {
  component: InviteAuthForm,
  title: 'Components/InviteAuthForm',
  args: { token: 'abcd' }
}
export default meta

type Story = StoryObj<typeof InviteAuthForm>

export const Default: Story = {}
