import parse from '@/utils/parse'
import type { File as AST } from '@babel/types'
import initialize from '@/plugins/initialize'

export interface EditorState {
  ast: AST
}

export interface EditorMethods {
  create: (code: string) => EditorState
}

const create = (code: string): EditorState => ({
  ast: parse(code, {
    plugins: [initialize],
  }),
})

const Editor: EditorMethods = {
  create,
}

export default Editor
