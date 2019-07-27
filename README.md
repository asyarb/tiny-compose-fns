# Tiny Functions <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
  - [Why wouldn't I just use `ramda` or `lodash`/`lodash/fp`?](#why-wouldnt-i-just-use-ramda-or-lodashlodashfp)
    - [Benchmark](#benchmark)
- [License](#license)

Tiny, performant, and safe utility functions that are compatible with `compose`.
Follows functional programming "data-last" practices.

Whenever possible, utilities functions will use vanilla JS implementations. For
example, `map()` just uses `Array.prototype.map()`.

This package is side-effect free and tree-shakeable. It also uses _very_ new
syntax (ES2019), so it's recommended to polyfill with `core-js` or some other
solution if planning to support non-evergreen browsers.

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

If you want non-curried utilities, use the `/nofp` target instead. Non-curried
utilities have better performance than their counterparts.

```js
import { map, isString, filter } from 'tiny-compose-fns/noFp'
```

### Why wouldn't I just use `ramda` or `lodash`/`lodash/fp`?

If performance isn't a problem for your project, it's likely better to just use
one of the above solutions. They are widely used, tested, and are likely already
a part of your bundle.

However, if performance is your thing, `tiny-compose-fns` can provide some
sizeable wins. This is especially true if you prefer a more functional
programming style with curried functions and composition.

#### Benchmark

Below is a benchmark of the example from the [Usage](#usage) section for each
library:

| Library                     | Safe? | Performance                                  |
| --------------------------- | :---: | -------------------------------------------- |
| **`tiny-compose-fns`**      |  Yes  | **509,997 ops/sec ±0.68% (87 runs sampled)** |
| **`tiny-compose-fns/noFp`** |  Yes  | **714,698 ops/sec ±0.48% (89 runs sampled)** |
| `lodash`                    |  Yes  | 456,085 ops/sec ±0.81% (86 runs sampled)     |
| `lodash/fp`                 |  Yes  | 105,821 ops/sec ±0.81% (88 runs sampled)     |
| `ramda`                     |  No   | 81,003 ops/sec ±0.88% (90 runs sampled)      |
| Vanilla JS                  |  No   | 716,063 ops/sec ±0.75% (88 runs sampled)     |

> The above benchmark was run on a 2018 Macbook Air 8th gen i5 (1.6GHz).

As expected, vanilla JS is fastest, but vanilla lacks the call-safety that some
frontend applications and sites would like to have. The thing to note here is
how much `tiny-compose-fns` keeps up with vanilla JS even when using `compose`.

`lodash/fp` and `ramda` both struggle to maintain relatively good performance
when using `_.compose` and `R.compose`, whereas `tiny-compose-fns` is able to
mostly keep up.

> You can also see the general performance impact that currying and composition
> takes.

That being said, the above may or may not apply for your project, so test what
works best for you and your project!

## License

MIT.
