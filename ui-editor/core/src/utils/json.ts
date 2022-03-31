import { compose, unary } from 'ramda'

export const toPlainObj = compose(unary(JSON.parse), unary(JSON.stringify))
