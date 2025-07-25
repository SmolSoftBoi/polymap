import type { Meta, StoryObj } from '@storybook/react'
import { SignInForm } from './SignInForm'

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  title: 'Components/SignInForm'
}
export default meta

type Story = StoryObj<typeof SignInForm>

export const Default: Story = {}
