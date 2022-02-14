import babel from '@babel/standalone'
// import template from '@babel/template'
import syntaxJsx from '@babel/plugin-syntax-jsx'
import prettier from 'prettier'
import { nanoid } from 'nanoid'
import { declare } from '@babel/helper-plugin-utils'

const ReactCode = `import react from 'react'

export default function App() {
  return <div>Hello, JSX Editor</div>
}
`

const plugin = declare((babel) => {
  const { types: t } = babel
  return {
    visitor: {
      JSXOpeningElement(path) {
        const newProp = t.jsxAttribute(
          t.jsxIdentifier('nanoid'),
          t.stringLiteral(nanoid())
        )
        path.node.attributes.push(newProp)
      },
    },
  }
})

const result = prettier.format(
  babel.transform(ReactCode, {
    plugins: [syntaxJsx, plugin],
    retainLines: true,
  }).code || '',
  { semi: false, parser: 'babel' }
)

console.log(result)
