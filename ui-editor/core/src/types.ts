export type Ast = unknown

export interface BuilderActions {
  initialize: (code: string, babelPlugins?: unknown[]) => unknown
  render: (ast: Ast, babelPlugins?: unknown[]) => unknown
  applyUpdate: (ast: Ast, update: unknown, babelPlugins?: unknown[]) => unknown
  generate: (ast: Ast, babelPlugins?: unknown[]) => unknown
}

// 流程概述
// 1. initialize: 为 AST 节点附加 ID，构建中间语法树
// 2. render: 构建搭建器的渲染代码
// 3. applyUpdate: 搭建器如有修改，将更新应用到 AST 上
// 4. generate: 将 AST 转回原始代码
