import { nanoid } from 'nanoid'
import { assoc, prop } from 'ramda'

export const JSX_NODE_ID = '__jsx_id'

export const assocNodeId = assoc(JSX_NODE_ID)

/**
 * hello
 * @type {(node: any) => string}
 */
export const getNodeId = prop(JSX_NODE_ID)

export const createNodeId = nanoid
