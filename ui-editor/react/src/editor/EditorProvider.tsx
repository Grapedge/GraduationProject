import React, { createContext, ReactNode } from 'react'

interface EditorStore {
  /**
   * 编辑器的状态
   */
  state: any
  /**
   * 编辑器支持的动作
   */
  actions: any
}

export const EditorContext = createContext<EditorStore | null>(null)

export interface EditorProviderProps {
  children?: ReactNode
}

export default function EditorProvider({ children }: EditorProviderProps) {
  // const editor =
  return (
    <EditorContext.Provider
      value={{
        state: {},
        actions: {},
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}
