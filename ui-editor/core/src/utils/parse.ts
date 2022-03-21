import { transform } from '@babel/standalone'
import type { TransformOptions } from '@babel/core'
import type { File } from '@babel/types'

export default function parse(
  code: string,
  options: TransformOptions = {}
): File {
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
}
