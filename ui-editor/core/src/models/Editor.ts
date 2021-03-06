import type { ASTNode } from '../interfaces/ast'
import type {
  EditorMethods,
  EditorState,
  NodePaths,
} from '../interfaces/editor'
import { assocNodeId, createNodeId, getNodeId } from '../utils/nodes'
import { parse, transform, transformFromAST } from '../utils/babel'
import type { NodePath as BabelNodePath } from '@babel/core'
import { declare } from '@babel/helper-plugin-utils'
import { compose, invoker, replace, split } from 'ramda'
import renderPlugin from './babelPlugins/render'

const create = (code: string) => {
  const paths: NodePaths = Object.create(null)
  const getNodePath = compose(
    split('.'),
    replace(/^\./, ''),
    replace(/\[(\w+)\]/g, '.$1'),
    invoker(0, 'getPathLocation')
  )
  const jsxNodeVisitor = (babelPath: BabelNodePath) => {
    if (getNodeId(babelPath.node as any)) {
      return
    }
    const nodeId = createNodeId()
    const newNode = assocNodeId(nodeId, babelPath.node) as ASTNode
    paths[nodeId] = getNodePath(babelPath)
    babelPath.replaceWith(newNode)
  }
  // 对四种节点进行初始化，为节点设置 ID，同时缓存节点路径（perf）
  const initialize = declare(() => ({
    visitor: {
      JSXElement: jsxNodeVisitor,
      JSXExpressionContainer: jsxNodeVisitor,
      JSXFragment: jsxNodeVisitor,
      JSXText: jsxNodeVisitor,
    },
  }))
  const ast = JSON.parse(JSON.stringify(parse({ plugins: [initialize] }, code)))
  return {
    ast,
    paths,
  }
}

const render = (options = {}, editor: EditorState) => {
  const result = transformFromAST(
    {
      plugins: [renderPlugin],
    },
    undefined,
    editor.ast
  )
  return result.code
}

const Editor: EditorMethods = {
  create,
  render,
} as any

export default Editor
