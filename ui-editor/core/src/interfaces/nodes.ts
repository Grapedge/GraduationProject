import type { ASTRoot, JSXNode } from './ast'
import type { Path } from './editor'

export type NodeId = string

export interface NodeMethods {
  get: (root: ASTRoot, path: Path) => JSXNode | undefined
}
