const Benchmark = require('benchmark')
const compose = require('compose-tiny')

const _ = require('lodash/fp')
const __ = require('lodash')
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
} = require('../dist/index.js')

// Testing Setup
const arr = [1, 2, 3, 1, 2, 3, undefined, null, 'foo bar baz', 'hello world']

const suite = new Benchmark.Suite()

suite.add('lodash/fp', () => {
  _.compose(
    _.map(camelCase),
    _.filter(isString),
    _.uniq,
    _.compact
  )(arr)
})
suite.add('lodash', () =>
  __.map(__.filter(__.uniq(__.compact(arr)), __.isString), __.camelCase)
)
suite.add('curryTinyFns', () => {
  compose(
    map(camelCase),
    filter(isString),
    uniq,
    compact
  )(arr)
})
suite.add('tinyFns', () =>
  mapB(camelCaseB, filterB(isStringB, uniqB(compactB(arr))))
)

suite
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
