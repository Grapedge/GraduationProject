import React, { createContext, useReducer } from 'react'
import { Editor as EditorCore } from '@jsx-editor/core'
import { editorReducer } from './editorSlice'

export const JSXEditorContext = createContext(null)
const JSXEditorDispatchContext = createContext(null)

const init = (initialCode) => {
  return {
    core: EditorCore.create(initialCode),
  }
}

const JSXEditor = ({ initialCode, children }) => {
  const [store, dispatch] = useReducer(editorReducer, initialCode, init)
  return (
    <JSXEditorContext.Provider value={store}>
      <JSXEditorDispatchContext.Provider value={dispatch}>
        {children}
      </JSXEditorDispatchContext.Provider>
    </JSXEditorContext.Provider>
  )
}

JSXEditor.displayName = 'JSXEditor'

export default JSXEditor
