import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import path from 'path'

const outDir = path.resolve(__dirname, '../dist')
const plugins = [

  nodeResolve(),
  typescript({
    abortOnError: true,
  }),
]

const entryFile = path.resolve(__dirname, '../src/index.ts')
export default {
  input: entryFile,
  output: [
    {
      format: 'es',
      file: path.resolve(outDir, './index.esm.prod.js'),
      plugins: [terser()],
    },
    {
      format: 'cjs',
      file: path.resolve(outDir, './index.cjs.prod.js'),
      plugins: [terser()],
    },
    {
      format: 'es',
      file: path.resolve(outDir, './index.esm.js'),

    },
    {
      format: 'cjs',
      file: path.resolve(outDir, './index.cjs.js'),
    },
  ],

  plugins,
}
