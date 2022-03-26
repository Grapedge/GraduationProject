import React, { createContext, ReactNode } from 'react'

interface NodeContextType {
  id: string
}

export const NodeContext = createContext<NodeContextType | null>(null)

export interface NodeProviderProps extends NodeContextType {
  children?: ReactNode
}

export default function NodeProvider({ id, children }: NodeProviderProps) {
  return <NodeContext.Provider value={{ id }}>{children}</NodeContext.Provider>
}
