import type { File as ASTRoot, Node as ASTNode } from '@babel/types'
export type {
  JSX as JSXNode,
  Node,
  JSXAttribute,
  JSXClosingElement,
  JSXElement,
  JSXClosingFragment,
  JSXEmptyExpression,
  JSXExpressionContainer,
  JSXFragment,
  JSXIdentifier,
  JSXMemberExpression,
  JSXNamespacedName,
  JSXOpeningElement,
  JSXOpeningFragment,
  JSXSpreadAttribute,
  JSXSpreadChild,
  JSXText,
} from '@babel/types'

export type { ASTRoot, ASTNode }

export interface ASTMethods {
  get: <Node extends ASTNode = ASTNode>(path: string[], ast: ASTRoot) => Node
}
