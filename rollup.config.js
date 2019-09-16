import { resolve } from 'path'
import sourceMaps from 'rollup-plugin-sourcemaps'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'
import { getIfUtils, removeEmpty } from 'webpack-config-utils'

const env = process.env.NODE_ENV || 'development';
const { ifProduction } = getIfUtils(env)
const lib = resolve(__dirname, 'lib')
const peerDependencies = pkg.peerDependencies || [];
const external = Object.keys(peerDependencies) || []

const getOutputFileName = (filename) =>
  ifProduction()
    ? filename.replace(/\.js$/, '.min.js')
    : filename;

const config = {
  input: resolve(lib, 'esm5', 'index.js'),
  output: {
    file: getOutputFileName(resolve(lib, 'bundles', 'index.umd.js')),
    format: 'umd',
    name: 'utils',
    sourcemap: true,
  },
  inlineDynamicImports: true,
  external,
  plugins: removeEmpty([
    commonjs(),
    nodeResolve(),
    sourceMaps(),
    ifProduction(uglify())
  ])
}

export default config;
