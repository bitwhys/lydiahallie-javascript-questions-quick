import { open, writeFile } from 'node:fs/promises'

const initQuestionObject = (questionId: string | number) => ({ id: questionId, options: [] })
const assignPromptKey = (prompt: string, dest: { id: string | number }) => ({ ...dest, prompt })
const assignCodeSampleKey = (codeSample: string, dest: any) => ({ ...dest, codeSample })
const assignAnswerKey = (answer: string, dest: any) => ({ ...dest, answer })
let PARSING_QUESTION_OBJECT = false
let PARSING_CODE_SAMPLE = false
let PARSING_EXPLANATION = false
const lineRuleRegEx = new RegExp(/^---/g)
const questionHeadingRegEx = new RegExp(/^#{6}/g)
const answerHeadingRegEx = new RegExp(/^#{4}/g)
const optionStartRegEx = new RegExp(/^-\s+([A-D])/i)
const codeSampleStartRegEx = new RegExp(/^`{3}javascript/)
const codeSampleEndRegEx = new RegExp(/^`{3}/)
const questions: any[] = []
/**
 *  Used to test a string (i.e., line below): const match = line.match(captureQuestionAndIdRegEx)
 *  match[0] - holds the complete match (not what we want)
 *  match[1] - holds the first capture group (\d{1,3}\.) which is used the question id (its number)
 *  match[2] - holds the second capture group (\s+.*) which is the actual question
 *
 */
const captureQuestionAndIdRegEx = new RegExp(/(\d{1,3}\.)(\s+.*)/)
const captureAnswerRegEx = new RegExp(/^#{4}\s+answer:(\s+[A-D])/i)
const captureOptionRegEx = new RegExp(/^-\s+([A-D]):(.*)/i)
const parseQuestions = async () => {
  const file = await open('./data/english-questions.md')
  let question
  const codeSampleLines = []
  for await (const line of file.readLines()) {
    // if we find the question heading. create question key, set PARSING_QUESTION_OBJECT flag
    if (questionHeadingRegEx.test(line)) {
      PARSING_QUESTION_OBJECT = true
      const match = line.match(captureQuestionAndIdRegEx)
      // @ts-ignore
      question = initQuestionObject(parseInt(match[1].replace('.', '')))
      // @ts-ignore
      question = assignPromptKey(match[2].trim(), question)
    } else if (codeSampleStartRegEx.test(line)) {
      PARSING_CODE_SAMPLE = true
      codeSampleLines.push(line)
    } else if (PARSING_CODE_SAMPLE) {
      codeSampleLines.push(line)
      if (codeSampleEndRegEx.test(line)) {
        PARSING_CODE_SAMPLE = false
        question.codeSample = codeSampleLines
      }
    } else if (optionStartRegEx.test(line)) {
      const match = line.match(captureOptionRegEx)
      // @ts-ignore
      const option = { option: match[1].trim(), label: match[2].trim() }
      question.options.push(option)
    } else if (answerHeadingRegEx.test(line)) {
      const match = line.match(captureAnswerRegEx)
      // @ts-ignore
      question = assignAnswerKey(match[1].trim(), question)
    } else if (lineRuleRegEx.test(line) && PARSING_QUESTION_OBJECT) {
      questions.push(question)
      PARSING_QUESTION_OBJECT = false
    }
  }
  writeFile('output.json', JSON.stringify(questions)).catch(e => console.error(e))
}

parseQuestions().catch(e => console.error(e))
