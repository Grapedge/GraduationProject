import { declare } from '@babel/helper-plugin-utils'
import { initNodeId, getNodeId } from '@/utils/nodes'
import type { NodePath } from '@babel/core'
import type { Node } from '@babel/types'

const initNode = (path: NodePath<Node>) => {
  if (!getNodeId(path.node)) {
    path.replaceWith(initNodeId(path.node) as any)
  }
}

// 为节点附加唯一标识
const initialize = declare(() => ({
  visitor: {
    JSXElement: initNode,
    JSXFragment: initNode,
    JSXText: initNode,
  },
}))

export default initialize
