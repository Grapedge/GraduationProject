import React from 'react'
import { Button as AntdButton, ButtonProps } from 'antd'
import { useNode } from '@craftjs/core'

export default function Button(props: ButtonProps) {
  const {
    connectors: { connect, drag },
  } = useNode()
  return <AntdButton ref={(ref) => connect(drag(ref as any))} {...props} />
}
