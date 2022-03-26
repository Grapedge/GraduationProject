import type { ASTRoot } from './ast'
import type { NodeMeta } from './nodes'

export interface EditorState {
  /**
   * 当前代码的 AST 表示
   */
  ast: ASTRoot
  /**
   * 节点信息
   */
  nodes: Record<string, NodeMeta>
}

export interface EditorMethods {
  create: (code: string) => EditorState
}
