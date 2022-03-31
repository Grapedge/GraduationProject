import { ASTRoot } from '../interfaces/ast'
import type { TransformOptions } from '@babel/core'
import * as babel from '@babel/standalone'
import { concat, curry, evolve, mergeLeft, when } from 'ramda'
import { toPlainObj } from './json'

const defaultPlugins = ['syntax-jsx']

// 合并 Babel options，特殊处理 plugins
const mergePlugins = evolve({
  plugins: when(Array.isArray, concat(defaultPlugins)),
})

export const transform = curry((options: TransformOptions, code: string) =>
  toPlainObj(babel.transform(code, mergePlugins(options)))
)

export const transformFromAST = curry(
  (options: TransformOptions, code: string | undefined, ast: ASTRoot) =>
    toPlainObj(babel.transformFromAst(ast, code, mergePlugins(options)))
)

const mergeParseOptions = mergeLeft({
  ast: true,
  code: false,
})

export const parse = curry(
  (options: TransformOptions, code: string): ASTRoot =>
    transform(mergeParseOptions(options), code).ast!
)
