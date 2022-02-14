import template from '@babel/template'

const ReactCode = `import react from 'react'

export default function App() {
  return <div>Hello, JSX Editor</div>
}
`

const ast = template.ast(ReactCode, {
  plugins: ['jsx'],
})

export default ast
