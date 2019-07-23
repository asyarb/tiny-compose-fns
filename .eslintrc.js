module.exports = {
  rules: {
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
}
