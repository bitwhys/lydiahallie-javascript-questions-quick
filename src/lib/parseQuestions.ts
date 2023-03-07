import { open, writeFile } from 'node:fs/promises'
import fs from 'node:fs'
// AST imports
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import remarkParse from 'remark-parse'

const doc = fs.readFileSync('./data/english-questions.md')
const tree = unified().use(remarkParse).parse(doc)
let SAW_THEMATIC_BREAK_TYPE = false
let COLLECT_NODES = false
const nodes: any[] = []

visit(tree, node => {
  nodes.push(node.type)
})

writeFile('nodes.json', JSON.stringify(nodes)).catch()
