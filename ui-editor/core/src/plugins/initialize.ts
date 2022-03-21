import { declare } from '@babel/helper-plugin-utils'
import { initNodeId } from '@/utils/nodes'
import type { NodePath } from '@babel/core'
import type { Node } from '@babel/types'

const initNode = (path: NodePath<Node>) => {
  initNodeId(path.node)
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
