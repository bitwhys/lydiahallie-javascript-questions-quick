import type { Meta, StoryObj } from '@storybook/react'
import ChoiceRadioButton, { ChoiceRadioButtonProps } from '../components/ChoiceRadioButton'

const meta: Meta<ChoiceRadioButtonProps> = {
  title: 'Atoms/ChoiceRadioButton',
  component: ChoiceRadioButton,
  decorators: [
    Story => (
      <div className="max-w-[448px]">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<ChoiceRadioButtonProps>

export const Default: Story = {
  args: {
    option: 'a',
    text: 'ReferenceError & Lydia',
  },
}
export const UnselectedWhileActive: Story = {
  args: {
    option: 'a',
    text: 'ReferenceError & Lydia',
    status: 'active',
    selected: false,
  },
}
export const SelectedWhileActive: Story = {
  args: {
    option: 'a',
    text: 'ReferenceError & Lydia',
    status: 'active',
    selected: true,
  },
}
export const IncorrectSelected: Story = {
  args: {
    option: 'a',
    text: 'ReferenceError & Lydia',
    status: 'completed',
    selected: true,
    correct: false,
  },
}
export const CorrectSelected: Story = {
  args: {
    option: 'a',
    text: 'ReferenceError & Lydia',
    status: 'completed',
    selected: true,
    correct: true,
  },
}

export const CorrectUnselected: Story = {
  args: {
    option: 'a',
    text: 'ReferenceError & Lydia',
    status: 'completed',
    selected: false,
    correct: true,
  },
}
