import React, { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import MultipleChoice from './components/MultipleChoice'
import {
  AppContainer,
  Card,
  ContainerWrapper,
  Content,
  Header,
  StyledTabList,
  StyledTabPanel,
  StyledTimer,
} from './components'
import QuestionPreview from './components/QuestionPreview'
import { MultipleChoiceOption } from './components/RadioButtonOption'
import { useTimer } from './hooks/useTimer'

export interface Resource {
  title: string
  link: string
  category: string
}
export interface Option {
  option: MultipleChoiceOption
  label: string
}

export interface Question {
  question: string

  codeSample: string
  options: Array<Question>
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
      question: 'Whats the output?',
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

const CountdownTimer = ({ time, onEnd }) => (
  <StyledTimer onClick={onEnd}>
    <div className="time">{time}</div>
  </StyledTimer>
)

const App = () => {
  const [current, setCurrent] = useState<Question>(data.questions[0])
  const [status, setStatus] = useState<'pending' | 'answered'>('pending')
  const [selected, setSelected] = useState<Option | null>(null)
  const { timer, endTimer } = useTimer(15, () => setStatus('answered'))
  let options = current.options

  return (
    <AppContainer>
      <ContainerWrapper>
        <div className="container">
          <Header>
            <span className="kicker">stolen from lydia allie - she said i could</span>
            <h1 className="title">JavaScript Questions</h1>
          </Header>
          <Card>
            <Tab.Group>
              <Tab.List as={StyledTabList}>
                <Tab>Solve</Tab>
                <Tab data-restricted={status !== 'answered'} disabled={status !== 'answered'}>
                  Explanation
                </Tab>
                <Tab>Resources</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel as={StyledTabPanel}>
                  <h2 className="panel-title">{current.question}</h2>
                  <Content>
                    <QuestionPreview question={current.question} outputEnabled={status === 'answered'} />
                    <MultipleChoice
                      options={options}
                      selected={selected}
                      onSelected={setSelected}
                      answer={current?.answer}
                      disabled={status === 'answered'}
                    />
                  </Content>
                  <CountdownTimer time={timer} onEnd={endTimer} />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Card>
        </div>
      </ContainerWrapper>
    </AppContainer>
  )
}
export default App
