import * as babel from '@babel/standalone'
import React, { useMemo } from 'react'

interface SimpleRenderProps {
  code: string
}

export default function SimpleRender({ code }: SimpleRenderProps) {
  const transformedCode = useMemo(
    () =>
      babel.transform(code, {
        plugins: ['syntax-jsx', 'transform-react-jsx'],
      }).code,
    [code]
  )
  const Element = useMemo(
    () => new Function('React', `return (${transformedCode})`)(React),
    [transformedCode]
  )
  return (
    <div className="render">
      <Element />
    </div>
  )
}
