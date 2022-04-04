// @ts-nocheck
import { NodeMethods } from '../interfaces/nodes'
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
import { A, D } from '@mobily/ts-belt'

const get = A.reduce(paths, obj, (x, y) => get(y, x))
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
