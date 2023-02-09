import React from 'react'
import {styled} from "../theme";

export type QuestionPreviewProps = {
  question: any
  outputEnabled?: boolean
}

const Box = styled('div',{
  height: '$full',
  width: '$full',
  background: '$mauve4',
})

const QuestionPreview = ({ question, outputEnabled = false }: QuestionPreviewProps) => {
  return <Box></Box>
}

export default QuestionPreview
