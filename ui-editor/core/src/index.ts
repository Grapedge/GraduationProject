import initialize from './plugins/initialize'
import * as babel from '@babel/standalone'

export { default as initializePlugin } from './plugins/initialize'

// 测试代码
const result = babel.transform(`const a = <div>123</div>`, {
  plugins: ['syntax-jsx', initialize],
  ast: true,
})

console.log(JSON.stringify(result.ast))
