// @ts-nocheck
import { EditorMethods } from '@/interfaces/editor'
import initialize from '@/plugins/initialize'
import parse from '@/utils/parse'
import { applySpec } from 'ramda'

// TODO: 完善逻辑，处理 Node 元数据
const create = applySpec({
  ast: parse({
    plugins: [initialize],
  }),
})

const Editor: EditorMethods = {
  create,
}

export default Editor
