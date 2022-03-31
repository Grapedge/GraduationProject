import { useContext } from 'react'
import { JSXEditorContext } from './JSXEditor'

const useEditor = () => {
  const editor = useContext(JSXEditorContext)
  if (editor === null) {
  }
  return editor
}

export default useEditor
