import React from 'react'
import { JSXEditor, SimpleRenderer } from '@jsx-editor/react'
import 'antd/dist/antd.css'

const reactCode = `import React from 'react'
import { Table } from 'antd'

const App = () => {
  return (
    <div>
      <Table title="hello" dataSource={[]} />
    </div>
  )
}
`

const compiledCode = `
const GrapesComponent = () => {
  return (
    React.createElement(NodeProvider, { id:"aaa" }, React.createElement(Table, {
      title: () => "Hello",
      dataSource: []
    }))
  )
}
`
const UIEditor = () => {
  return (
    <div>
      {/* <JSXEditor initialCode={reactCode}>
      </JSXEditor> */}
      <SimpleRenderer code={compiledCode} />
    </div>
  )
}

export default UIEditor
