import React from 'react'
import { Space as AntdSpace, SpaceProps } from 'antd'

export default function Space(props: SpaceProps) {
  // 处理拖放逻辑
  // const {} = useNode()
  // ...
  return <AntdSpace {...props} />
}

// 设想的写法：
// const SpaceDesignConfig = {
//   related: {
//     Prototype() {
//       右侧配置面板
//       const node = useNode()
//       const actions = useEditorActions()
//       const onChange = actions.setProps(node)
//       return (
//         <Formily>
//           <SchemaField />
//         </Formily>
//       )
//     },
//   },
// }
