import type { Node, NodeId } from './nodes'

export interface JSXEditorState {
  /**
   * 获得当前的 AST 树
   */
  getAST: () => unknown
  /**
   * 得到当前的源代码文本
   */
  getSource: () => string
  /**
   * 根据 NodeId 查询 Node
   * @example
   * const node = editorState.get('nanoid')
   * // node 可能不存在，注意空值检测
   * const grandparent = node?.getParent()?.getParent()
   */
  getNodeById: (nodeId: NodeId) => Node
}
