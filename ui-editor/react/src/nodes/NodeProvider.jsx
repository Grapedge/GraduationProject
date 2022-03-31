import React, { createContext } from 'react'

export const NodeContext = createContext(null)

/**
 * @type {import('react').FC<{ id: string }>}
 */
const NodeProvider = ({ id, children }) => {
  return <NodeContext.Provider value={id}>{children}</NodeContext.Provider>
}

export default NodeProvider
