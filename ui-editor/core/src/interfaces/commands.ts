// import type { PluginObj } from '@babel/core'
import type { BabelAPI } from '@babel/helper-plugin-utils'
import type { JSXEditorState } from './editor'
// TODO: 重新设计一下

export type CommandType = string | symbol

export interface Command<Payload = unknown> {
  type: string | symbol
  payload: Payload
}

export interface EditorCommandAPI {
  /**
   * 此次变换输入的编辑器状态
   */
  getInitialEditorState: JSXEditorState
  /**
   * 提供 Babel API 以供进行 AST 变换
   */
  babelAPI: BabelAPI
  // appendPlugin: (babelPlugin: PluginObj['visitor']) => void
}

export interface CommandHandler<Payload = unknown> {
  (payload: Payload, api: EditorCommandAPI): void
}

export interface GeneratedResult {
  /**
   * 生成的代码文本
   */
  code: string
  /**
   * sourcemap 数据，暂不支持
   */
  sourcemap: undefined
}

/**
 * JSX 编辑器命令总线。默认已注册 `CoreCommands`，允许注册自定义命令。
 * 可通过 `execute` 方法将命令应用到状态，并生成新的编辑器状态。
 * 可通过 `generate` 方法将命令应用到状态，并生成代码文本内容。
 */
export interface JSXEditorCommandBus {
  /**
   * 基于给定的 `initialCode` 初始化编辑器内部状态
   */
  init: (initialCode?: string) => JSXEditorState
  /**
   * 传入一个或多个命令，如果同时传入多个命令，这些命令将合并执行。
   * @param commands
   * @returns 经过命令处理后的新状态
   * @example
   * editor.execute(
   *   commands.append(parentId, nodeId),
   *   commands.setProp(nodeId, key, value),
   * )
   */
  execute: (state: JSXEditorState, ...commands: Command[]) => JSXEditorState
  /**
   * 同 `execute` 方法，`generate` 只返回生成的代码文本，而不是完整的编辑器状态。
   */
  generate: (state: JSXEditorState, ...commands: Command[]) => GeneratedResult
  /**
   * 注册命令、命令处理器。
   * 当分发命令时，将由命令处理器处理对状态的更改。
   */
  register: (command: CommandType, handler: CommandHandler) => void
}
