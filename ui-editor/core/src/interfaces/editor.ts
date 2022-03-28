import type { ASTRoot, JSXNode } from './ast'
import type { NodeId } from './nodes'

export type Path = (string | number)[]

export type NodePaths = Record<NodeId, Path>

export interface EditorState {
  /**
   * 当前代码的 AST 表示
   */
  ast: ASTRoot
  /**
   * 所有 Node 对应的 AST 路径
   */
  paths: NodePaths
}

export interface EditorMethods {
  create: (code: string) => EditorState
  getNode: (id: NodeId, editor: EditorState) => JSXNode | undefined
}
