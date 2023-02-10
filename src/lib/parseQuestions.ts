import { open } from 'node:fs/promises'
import type { Question } from '../App'

const generateQuestionJsonFile = () => {}
const initQuestionObject = (questionId: string | number) => ({ id: questionId })
const assignQuestionKey = (question: string, dest: { id: string | number }) => ({ ...dest, question })
const assignCodeSampleKey = (codeSample: string, dest: any) => ({ ...dest, codeSample })
const assignAnswerKey = (answer: string, dest: any) => ({ ...dest, answer })
let PARSING_IN_PROGRESS = false
const lineRuleRegEx = new RegExp(/^---/g)
const questionHeading = new RegExp(/^#{6}/g)
const questions: any[] = []
/**
 *  Used to test a string (i.e., line below): const match = line.match(captureQuestionAndIdRegEx)
 *  match[0] - holds the complete match (not what we want)
 *  match[1] - holds the first capture group (\d{1,3}\.) which is used the question id (its number)
 *  match[2] - holds the second capture group (\s+.*) which is the actual question
 *
 */
const captureQuestionAndIdRegEx = new RegExp(/(\d{1,3}\.)(\s+.*)/)
const parseQuestions = async () => {
  const file = await open('./data/english-questions.md')
  let question, prompt, code, options, explanation
  for await (const line of file.readLines()) {
    // if we find the question heading. create question key, set PARSING_IN_PROGRESS flag
    if (questionHeading.test(line)) {
      PARSING_IN_PROGRESS = true
      const match = line.match(captureQuestionAndIdRegEx)
      // @ts-ignore
      question = initQuestionObject(parseInt(match[1].replace('.', '')))
      // @ts-ignore
      question = assignQuestionKey(match[2].trim(), question)
    } else if (lineRuleRegEx.test(line) && PARSING_IN_PROGRESS) {
      questions.push(question)
      PARSING_IN_PROGRESS = false
    }
  }
  console.log(questions)
}

parseQuestions().catch(e => console.error(e))
