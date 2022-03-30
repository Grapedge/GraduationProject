import { compose } from 'ramda'

export const toPlainObj = compose(JSON.parse, JSON.stringify)
