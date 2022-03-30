import { nanoid } from 'nanoid'
import { assoc, prop } from 'ramda'

export const JSX_NODE_ID = '__jsx_id'

export const assocNodeId = assoc(JSX_NODE_ID)

export const getNodeId = (node: any): string | undefined =>
  prop(JSX_NODE_ID)(node)

export const createNodeId = nanoid
