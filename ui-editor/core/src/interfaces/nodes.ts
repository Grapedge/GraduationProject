import type {
  File as AST,
  Expression as ESExpression,
  JSXEmptyExpression,
} from '@babel/types'

export { AST }
// TODO: 完善 Node 定义，尤其是 Expression

export type NodeId = string

export enum NodeType {
  ELEMENT = 'element',
  TEXT = 'text',
  FRAGMENT = 'fragment',
  EXPRESSION = 'expression',
}

type ParentNode = ElementNode | FragmentNode

/**
 * 拖放系统中的 Node 定义
 */
export interface Node {
  id: NodeId
  type: NodeType
  getParent: () => ParentNode | null
}

export interface TextNode extends Node {
  type: NodeType.TEXT
  value: string
}

interface NodeWithChildren extends Node {
  getChildren: () => Node[] | null
}

export interface ElementNode extends NodeWithChildren {
  type: NodeType.ELEMENT
  getProps: () => Record<string, unknown>
}

export interface FragmentNode extends NodeWithChildren {
  type: NodeType.FRAGMENT
}

export interface ExpressionNode extends Node {
  type: NodeType.EXPRESSION
  expression: ESExpression | JSXEmptyExpression
}

export type RootNode = (ElementNode | FragmentNode) & {
  parent: null
}

/**
 * 可能的 JSX 写法
 * <div>123</div>
 * <></>
 * <div>{1 + 1}</div>
 * <div>{a ? <p>1</p>:<p>2</p>}</div>
 * <div>{a.map((x) => {})}</div>
 */
