import type { File as AST } from '@babel/types'
export { AST }

export type NodeId = string

/**
 * 可能的 JSX 写法
 * <div>123</div>
 * <></>
 * <div>{1 + 1}</div>
 * <div>{a ? <p>1</p>:<p>2</p>}</div>
 * <div>{a.map((x) => {})}</div>
 */

/**
 * Node 路径信息
 */
export interface NodePath {
  /**
   * Node 唯一标识
   */
  id: NodeId
  /**
   * AST 节点访问路径
   */
  path: string[]
}

export interface NodePathMethods {
  create: (path: string[]) => NodePath
}
