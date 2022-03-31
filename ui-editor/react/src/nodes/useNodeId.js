import { useContext } from 'react'
import { NodeContext } from './NodeProvider'

/**
 * 用于 JSX Editor 渲染节点
 * @returns {string}
 */
const useNodeId = () => {
  const nodeId = useContext(NodeContext)
  if (nodeId === null) {
    throw new Error('useNodeId 仅能用于 NodeProvider 中')
  }
  return nodeId
}

export default useNodeId
