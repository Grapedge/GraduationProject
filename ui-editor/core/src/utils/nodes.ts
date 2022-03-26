import { Node } from '@babel/types'
import { nanoid } from 'nanoid'
import { NODE_ID_FIELD } from '@/constants'

export type NodeId = string

export const getNodeId = (node: Node): NodeId | undefined =>
  (node as any)[NODE_ID_FIELD]

export const initNodeId = (node: Node): Node => {
  if (getNodeId(node)) {
    // throw new Error('Node 已经初始化，不允许重复初始化')
    return node
  }

  return {
    ...node,
    [NODE_ID_FIELD]: nanoid(),
  } as any
}
