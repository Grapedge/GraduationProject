import type {
  ASTRoot,
  JSXAttribute,
  JSXElement,
  JSXExpressionContainer,
  JSXFragment,
  JSXNode,
  JSXSpreadAttribute,
} from './ast'
import type { Path } from './editor'

export type NodeId = string

export enum NodeType {
  ELEMENT = 'JSXElement',
  FRAGMENT = 'JSXFragment',
  EXPRESSION = 'JSXExpressionContainer',
  TEXT = 'JSXText',
}

export type ElementProps = (JSXAttribute | JSXSpreadAttribute)[]

export type ElementPropValue =
  | string
  | JSXElement
  | JSXFragment
  | JSXExpressionContainer
  | null

export interface NodeMethods {
  get: (path: Path, root: ASTRoot) => JSXNode | undefined
  getType: (node: JSXNode) => NodeType
  getProps: (element: JSXElement) => ElementProps
  getProp: (element: JSXElement, key: string) => ElementPropValue
}
