import { Editor } from '@/models'

const reactCode = `
import React from 'react'

const App = () => {
  return (
    <>
      <div>text</div>
      {1 + 1}
    </>
  )
}
`

describe('Editor.create', () => {
  test('the code should be parsed as an AST', () => {
    const state = Editor.create(reactCode)
    expect(state.ast).toBeDefined()
  })
})
