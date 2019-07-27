import babel from 'rollup-plugin-babel'
import clear from 'rollup-plugin-clear'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const IS_PROD = process.env.NODE_ENV === 'production'

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) return () => false

  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return id => pattern.test(id)
}

export default {
  input: {
    index: 'src/index.js',
    noFp: 'src/base.js',
  },
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  external: makeExternalPredicate([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]),
  plugins: [
    clear({
      targets: ['dist'],
    }),
    babel(),
    IS_PROD && terser(),
    filesize(),
  ],
}
