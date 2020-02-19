import { toArray } from '../../src/array/toArray'

describe('toArray', () => {
  it('returns an array from the provided input', () => {
    expect(toArray({ foo: 'bar', hello: 'world' })).toEqual(['bar', 'world'])
    expect(toArray('foo')).toEqual(['f', 'o', 'o'])
  })

  it('returns an empty array if given empty input', () => {
    expect(toArray(undefined)).toEqual([])
    expect(toArray(null)).toEqual([])
    expect(toArray(false)).toEqual([])
  })

  it('returns an empty array if given a number', () => {
    expect(toArray(1)).toEqual([])
    expect(toArray(213)).toEqual([])
  })
})
