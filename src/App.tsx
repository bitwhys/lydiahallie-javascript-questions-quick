import { useState } from 'react'
import MultipleChoice from './components/MultipleChoice'
import { AppContainer, Card, ContainerWrapper, Content, Header } from './components'
import QuestionPreview from './components/QuestionPreview'
import { MultipleChoiceOption } from './components/RadioButtonOption'

export interface Resource {
  title: string
  link: string
  category: string
}
export interface Option {
  option: MultipleChoiceOption
  label: string
}

export type OptionsTuple = [Option, Option, Option, Option]
export interface Question {
  question: string
  options:OptionsTuple
  answer: string
  explanation: string
  resources?: Array<Resource>
}
export interface AppData {
  questions: Array<Question>
}

const data: AppData = {
  questions: [
    {
      question: '',
      options: [
        { option: MultipleChoiceOption.A, label: 'ReferenceError & Lydia' },
        { option: MultipleChoiceOption.B, label: 'ReferenceError & Lydia' },
        { option: MultipleChoiceOption.C, label: 'ReferenceError & Lydia' },
        { option: MultipleChoiceOption.D, label: 'ReferenceError & Lydia' },
      ],
      answer: 'c',
      explanation: '',
      resources: [],
    },
  ],
}
const App = () => {
  const [current, setCurrent] = useState<Question>(data.questions[0])
  const [status, setStatus] = useState<'pending' | 'answered'>('pending')
  const [selected, setSelected] = useState<Option | null>(null)
  let options = current.options
  const handleOptionSelect = (obj) => {
    console.log(obj)
  }
  return (
    <AppContainer>
      <ContainerWrapper>
        <div className="container">
          <Header>
            <span className="kicker">stolen from lydia allie - she said i could</span>
            <h1 className="title">JavaScript Questions</h1>
          </Header>
          <Card>
            <Content>
              <QuestionPreview question={current.question} outputEnabled={status === 'answered'} />
              <MultipleChoice options={options} selected={selected} onSelected={setSelected} answer={current?.answer} disabled={status === 'answered'} />
            </Content>
          </Card>
        </div>
      </ContainerWrapper>
    </AppContainer>
  )
}
export default App
