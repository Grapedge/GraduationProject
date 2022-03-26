import React, { ReactNode } from 'react'
import EditorProvider from './EditorProvider'

export interface EditorProps {
  children?: ReactNode
}

export default function Editor({ children }: EditorProps) {
  return <EditorProvider>{children}</EditorProvider>
}
