# Tiny Functions <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

Tiny and safe utility functions that are `compose`able. Follows functional
programming "data-last" practices.

Whenever possible, utilities functions will use vanilla functions. For example,
`map()` uses `Array.prototype.map()`, etc.

This package is side-effect free and tree-shakeable. Uses _very_ new syntax
(ES2019), so it's recommended to polyfill with `core-js` or other solution if
using in non-evergreen browsers.

## Installation

```bash
# yarn
yarn add tiny-compose-fns

# npm
npm i tiny-compose-fns
```

## Usage

All utilites are provided as named exports:

```js
import {
  map,
  compact,
  camelCase,
  filter,
  uniq,
  isString,
  compose,
} from 'tiny-compose-fns'

const arr = [1, 2, 3, 1, 2, 3, undefined, null, 'foo bar baz', 'hello world']

const newArr = compose(
  map(camelCase),
  filter(isString),
  uniq,
  compact
)(arr) // => ['fooBarBaz', 'helloWorld']
```

If you want non-curried utilities, use the `/nofp` target instead.

```js
import { map, isString, filter } from 'tiny-compose-fns/noFp'
```

## License

MIT.
