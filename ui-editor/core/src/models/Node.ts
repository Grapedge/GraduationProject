// @ts-nocheck
import { ASTRoot, JSXElement } from '@/interfaces/ast'
import { Path } from '@/interfaces/editor'
import { NodeMethods } from '@/interfaces/nodes'
import {
  compose,
  find,
  identity,
  path,
  prop,
  propEq,
  useWith,
  when,
} from 'ramda'

const get = path
const getType = prop('type')
const getProps = path(['openingElement', 'attributes'])

const getProp = useWith(
  compose(
    when(propEq('type', 'StringLiteral'), prop('value')),
    find(propEq('name'))
  ),
  [getProps, identity]
)

const Node: NodeMethods = {
  get,
  getType,
  getProps,
  getProp,
}

export default Node
