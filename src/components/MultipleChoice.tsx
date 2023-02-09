import React from 'react'
import {styled} from "../theme";
import {RadioGroup} from '@headlessui/react'
import {Option, OptionsTuple} from "../App";
import {RadioButtonOption} from "./RadioButtonOption";

export type MultipleChoiceProps = {
  options: OptionsTuple
  answer: string
  disabled?: boolean
  onSelected?(): void
  selected: Option
}

const Flex = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$3',
})

const MultipleChoice = ({options, selected, onSelected, answer, disabled}: MultipleChoiceProps) => {
  return <RadioGroup as={Flex} value={selected} onChange={onSelected}>
    {options.map(option => (<RadioButtonOption value={option} key={option.option} disabled={disabled} valid={answer === option.option}/>))}
  </RadioGroup>
}

export default MultipleChoice
