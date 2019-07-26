const Benchmark = require('benchmark')
const _ = require('lodash/fp')
const __ = require('lodash')
const { map } = require('../dist/index.js')
const { map: curryMap } = require('../dist/fp.js')

// Testing Setup
const arr = []
for (let i = 0; i < 100; i++) arr[i] = i
const strAndRoot = x => 'Some string here' + Math.sqrt(x * x)

const suite = new Benchmark.Suite()

suite.add('lodash/fp', () => _.map(strAndRoot, arr))
suite.add('lodash', () => __.map(arr, strAndRoot))
suite.add('tinyFns', () => map(strAndRoot, arr))
suite.add('curryTinyFns', () => curryMap(strAndRoot, arr))
suite.add('vanilla', () => arr.map(strAndRoot))

suite
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
