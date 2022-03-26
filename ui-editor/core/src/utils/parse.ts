import { transform } from '@babel/standalone'
import type { TransformOptions } from '@babel/core'
import type { File } from '@babel/types'
import { curry } from 'ramda'

const parse = curry((options: TransformOptions, code: string): File => {
  return JSON.parse(
    JSON.stringify(
      transform(code, {
        ...options,
        ast: true,
        code: false,
        plugins: ['syntax-jsx', ...(options.plugins || [])],
      }).ast!
    )
  )
})

export default parse
