const Benchmark = require('benchmark')
const compose = require('compose-tiny')

const _ = require('lodash/fp')
const {
  map,
  compact,
  camelCase,
  filter,
  uniq,
  isString,
} = require('../dist/fp.js')

// Testing Setup
const arr = [1, 2, 3, 1, 2, 3, undefined, null, 'foo bar baz', 'hello world']

const suite = new Benchmark.Suite()

suite.add('lodash', () => {
  _.compose(
    _.map(camelCase),
    _.filter(isString),
    _.uniq,
    _.compact
  )(arr)
})
suite.add('tinyFns', () => {
  compose(
    map(camelCase),
    filter(isString),
    uniq,
    compact
  )(arr)
})

suite
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
