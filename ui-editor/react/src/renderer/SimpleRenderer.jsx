// @ts-nocheck
// do what?
// 注入 antd 包的 Table
// 注入 NodeProvider
// 将代码进行渲染
import React from 'react'
import { append, constructN, join, pipe, prepend, __ } from 'ramda'
import { NodeProvider } from '../nodes'
import { Table } from 'antd'

// new Function: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function

// 约定：渲染代码的主函数为 GrapesComponent
const template = pipe(
  prepend('const { React, NodeProvider, Table, } = $scope'),
  append(`GrapesComponent.displayName = "GrapesComponent"`),
  append(`return React.createElement(GrapesComponent, {})`),
  join('\n')
)
const consFn2 = constructN(2, Function)
const renderer = pipe(template, consFn2('$scope'))

/**
 * @type {import("react").FC<{code: string; scope: any }>}
 */
const SimpleRenderer = ({ code, scope }) => {
  const render = renderer([code])
  return render({
    ...scope,
    React,
    NodeProvider,
    Table,
  })
}

export default SimpleRenderer
