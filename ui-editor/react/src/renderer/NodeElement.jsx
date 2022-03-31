import { Node } from '@jsx-editor/core'
import React from 'react'
import useNodeId from '../nodes/useNodeId'

const NodeElement = ({ children }) => {
  const nodeId = useNodeId()
  const handleClick = () => {
    console.log('click')
  }
  return <div onClick={handleClick}>{children}</div>
}

NodeElement.displayName = 'NodeElement'

export default NodeElement
