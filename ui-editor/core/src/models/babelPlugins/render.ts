// @ts-nocheck
import { declare } from '@babel/helper-plugin-utils'
import {
  allPass,
  any,
  both,
  compose,
  curryN,
  flip,
  path,
  propEq,
  props,
  unary,
} from 'ramda'
import { getNodeId } from '../../utils/nodes'

const WRAPPER_COMPONENT = 'NodeProvider'

const buildWrapperTemplate = (id) =>
  `<${WRAPPER_COMPONENT} id="${id}"></${WRAPPER_COMPONENT}>`

const renderPlugin = declare(({ types: t, template }) => {
  const isJSXElement = unary(t.isJSXElement)
  const isJSXIdentifier = unary(t.isJSXIdentifier)
  const isWrapper = allPass([
    isJSXElement,
    compose(
      both(isJSXIdentifier, propEq('name', WRAPPER_COMPONENT)),
      path(['openingElement', 'name'])
    ),
  ])
  // 构建 N
  const buildWrapper = compose(
    flip(curryN(2, template.ast))({
      plugins: ['jsx'],
    }),
    buildWrapperTemplate
  )
  // 如果父节点或自身是 Wrapper，跳过此节点
  const shouldSkipWrapPath = compose(any(isWrapper), props(['parent', 'node']))
  // 表达式节点是否应该包裹 Wrapper
  // 如果表达式节点的父节点是 Element 或者 Fragment
  // const shouldWrapExpression = compose(either(t.is), prop('parent'))
  return {
    visitor: {
      JSXElement: (path) => {
        if (shouldSkipWrapPath(path)) {
          return
        }
        const jsxId = getNodeId(path.node)
        if (!jsxId) {
          return
        }

        const { expression: wrapper } = buildWrapper(jsxId)
        wrapper.children = [path.node]
        path.replaceWith(wrapper)
      },
    },
  }
})

export default renderPlugin
