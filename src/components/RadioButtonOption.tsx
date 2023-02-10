import { styled, VariantProps } from '../theme'
import { RadioGroup } from '@headlessui/react'
import { Check, X } from 'phosphor-react'
import { Fragment } from 'react'

export enum MultipleChoiceOption {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
}
const baseRadioButton = styled('button', {
  padding: '$4',
  borderRadius: '$sm',
  borderWidth: '$2',
  borderColor: '$mauve7',
  borderStyle: 'dashed',
  display: 'flex',
  columnGap: '$3a',
  alignItems: 'center',
  flexGrow: '1',
  '&:focus': {
    outline: 'none',
  },
  '[data-role="option"]': {
    height: '$10',
    width: '$10',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '$lg',
    fontWeight: '$medium',
    textTransform: 'uppercase',
    borderRadius: '$pill',
    borderWidth: '$2',
    borderStyle: '$dashed',
    borderColor: '$mauve7',
  },
  '[data-role="label"]': {
    fontFamily: '$mono',
  },
})
const StyledRadioButtonBase = styled(baseRadioButton, {
  variants: {
    // related to the question as a whole
    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
    // particular to a specific option (radio button)
    selected: {
      true: {},
    },
    // app level. an option doesn't know if it's 'correct or not'
    valid: {
      true: {}
    },
  },
  compoundVariants: [
    {
      disabled: false,
      selected: false,
      css: {
        '&:hover': {
          backgroundColor: '$purple50',
          borderColor: '$purple500',
          color: '$purple700',
          '[data-role="option"]': {
            backgroundColor: '$purple100',
            borderColor: '$purple500',
          },
        },
      },
    },
    {
      disabled: false,
      selected: true,
      css: {
        backgroundColor: '$purple100',
        borderColor: '$purple500',
        borderStyle: '$solid',
        '[data-role="option"]': {
          backgroundColor: '$purple500',
          color: 'white',
          borderStyle: '$solid',
          borderColor: '$purple500',
        },
        '[data-role="label"]': {
          color: '$purple700',
        },
      },
    },
    {
      disabled: true,
      selected: true,
      valid: false,
      css: {
        backgroundColor: '$red3',
        borderColor: '$red7',
        '[data-role="option"]': {
          backgroundColor: '$red9',
          color: 'white',
          borderStyle: '$solid',
          borderColor: '$red9',
        },
        '[data-role="label"]': {
          color: '$red9',
        },
      },
    },
    {
      disabled: true,
      selected: false,
      valid: true,
      css: {
        backgroundColor: '$grass3',
        borderColor: '$grass7',
        '[data-role="option"]': {
          backgroundColor: '$grass6',
          color: '$grass9',
          borderColor: '$grass9',
        },
        '[data-role="label"]': {
          color: '$grass9',
        },
      },
    },
    {
      disabled: true,
      selected: true,
      valid: true,
      css: {
        backgroundColor: '$grass3',
        borderColor: '$grass7',
        borderStyle: '$solid',
        '[data-role="option"]': {
          backgroundColor: '$grass9',
          color: 'white',
          borderColor: '$grass9',
          borderStyle: '$solid',
        },
        '[data-role="label"]': {
          color: '$grass9',
        },
      },
    },
  ],
  defaultVariants: {
    disabled: false,
    valid: false,
  },
})
type RadioButtonOptionVariants = VariantProps<typeof StyledRadioButtonBase>
type RadioButtonOptionProps = RadioButtonOptionVariants & {
  option: MultipleChoiceOption
  label: string
}

const OptionIcon = ({ option, disabled, valid }) => {
  if (!disabled) {
    return option
  } else if (!valid) {
    return <X size={24} weight="bold" />
  } else {
    return <Check size={24} weight="bold" />
  }
}
export const RadioButtonOption = ({ value, disabled, valid }) => {
  return (
    <RadioGroup.Option value={value} key={value.option} as={Fragment}>
      {({ checked }) => (
        <StyledRadioButtonBase selected={checked} disabled={disabled} valid={valid}>
          <span data-role="option">
            <OptionIcon option={value.option} disabled={disabled} valid={valid} />
          </span>
          <span data-role="label">{value.label}</span>
        </StyledRadioButtonBase>
      )}
    </RadioGroup.Option>
  )
}
