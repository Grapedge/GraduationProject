import { declare } from '@babel/helper-plugin-utils'
import { nanoid } from 'nanoid'

const addDesignId = (path: any) => {
  path.node.designId = nanoid()
}

// TODO: 特殊处理一下 <></> 的写法
// 为节点附加唯一标识
const initializePlugin = declare(() => ({
  visitor: {
    JSXOpeningElement: addDesignId,
    JSXOpeningFragment: addDesignId,
  },
}))

export default initializePlugin
