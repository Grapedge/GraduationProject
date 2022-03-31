import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import packageJson from './package.json'

const extensions = ['.js', '.jsx', '.mjs']

export default defineConfig({
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
  ],
  external: [
    ...Object.keys(packageJson.dependencies),
    ...Object.keys(packageJson.peerDependencies),
  ],
})
