import React from 'react'
import { style, css } from '@twind/core'

export type ChoiceRadioButtonProps = {
  selected?: boolean
  correct?: boolean
  status?: 'inactive' | 'active' | 'completed'
  option: 'a' | 'b' | 'c' | 'd'
  text: string
}
const choiceRadio = style({
  base: css`
    @apply flex items-center gap-x-4 rounded-xl border-2 border-dashed  border-transparent p-4;
    [data-option] {
      @apply inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent text-lg font-semibold uppercase leading-4;
    }
    [data-role='label'] {
      @apply font-mono text-base font-medium;
    }
  `,
  props: {
    status: {
      inactive: css`
        @apply border-neutral-7;
        [data-option] {
          @apply border-neutral-7 border-dashed;
        }
      `,
      active: '',
      completed: '',
    },
    correct: {
      true: '',
      false: '',
    },
    selected: {
      true: '',
      false: '',
    },
  },
  defaults: {
    status: 'inactive',
  },
  when: [
    [
      { status: 'active', selected: false },
      css`
        @apply bg-neutral-3 border-neutral-7;
        [data-option] {
          @apply bg-neutral-5 text-neutral-9 border-neutral-7;
        }
        [data-role='label'] {
          @apply text-neutral-9;
        }
      `,
    ],
    [
      { status: 'active', selected: true },
      css`
        @apply bg-purple-3 border-purple-5 border-solid;
        [data-option] {
          @apply bg-purple-5 border-purple-5 border-solid text-white;
        }
        [data-role='label'] {
          @apply text-purple-8;
        }
      `,
    ],
    [
      { status: 'completed', selected: false, correct: true },
      css`
        @apply bg-positive-3 border-positive-7;
        [data-option] {
          @apply bg-positive-5 border-positive-7 text-positive-9;
        }
        [data-role='label'] {
          @apply text-positive-9;
        }
      `,
    ],
  ],
})

const ChoiceRadioButton = ({
  correct,
  option,
  text,
  status = 'inactive',
  selected = false,
}: ChoiceRadioButtonProps) => {
  return (
    <div className={choiceRadio({ status, selected, correct })}>
      <span data-option={option}>{option}</span>
      <span data-role="label">{text}</span>
    </div>
  )
}

export default ChoiceRadioButton
