const Benchmark = require('benchmark')

const _ = require('lodash/fp')
const __ = require('lodash')
const R = require('ramda')
const RA = require('ramda-adjunct')
const {
  map: mapB,
  compact: compactB,
  camelCase: camelCaseB,
  filter: filterB,
  uniq: uniqB,
  isString: isStringB,
} = require('../dist/noFp.js')
const {
  map,
  compact,
  camelCase,
  filter,
  uniq,
  isString,
  compose,
} = require('../dist/index.js')

// Testing Setup
const arr = [1, 2, 3, undefined, null, 'foo bar baz', 'hello world']
const suite = new Benchmark.Suite()

suite.add('tinyFns/noFp', () =>
  mapB(camelCaseB, filterB(isStringB, uniqB(compactB(arr))))
)
suite.add('tinyFns', () => {
  compose(
    map(camelCase),
    filter(isString),
    uniq,
    compact
  )(arr)
})
suite.add('lodash/fp', () => {
  _.compose(
    _.map(_.camelCase),
    _.filter(_.isString),
    _.uniq,
    _.compact
  )(arr)
})
suite.add('lodash', () =>
  __.map(__.filter(__.uniq(__.compact(arr)), __.isString), __.camelCase)
)
suite.add('ramda', () =>
  R.compose(
    R.map(_.camelCase),
    R.filter(RA.isString),
    R.uniq,
    RA.compact
  )(arr)
)
suite.add('vanilla JS', () =>
  [...new Set(arr.filter(Boolean))]
    .filter(i => typeof i === 'string')
    .map(camelCaseB)
)

suite
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
