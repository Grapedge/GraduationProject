import { Editor } from '@/models'
import { getNodeId } from '@/utils/nodes'
import { path } from 'ramda'
import type { ASTNode } from '@/interfaces/ast'

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
  test.only('the code should be parsed as an AST', () => {
    const state = Editor.create(reactCode)
    expect(state.ast).toBeDefined()
    expect(state.paths).toBeDefined()
    expect(Object.keys(state.paths)).toHaveLength(7)
    Object.entries(state.paths).forEach(([nodeId, nodePath]) => {
      const node = path(nodePath, state.ast) as ASTNode
      expect(getNodeId(node as any)).toBe(nodeId)
      expect([
        'JSXText',
        'JSXFragment',
        'JSXElement',
        'JSXExpressionContainer',
      ]).toContain(node.type)
    })
  })
})
