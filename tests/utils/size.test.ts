import { size } from '../../src/utils/size'

describe('size', () => {
  const arr = [1, 2, 3]
  const obj = { foo: 'bar', hello: 'world' }
  const set = new Set(arr)
  const map = new Map()

  map.set('foo', 'bar')
  map.set('hello', 'world')

  it('returns 0 if given undefined or null', () => {
    expect(size(undefined)).toBe(0)
    expect(size()).toBe(0)
    expect(size(null)).toBe(0)
  })

  it('returns 0 if given empty colletions', () => {
    expect(size('')).toBe(0)
    expect(size([])).toBe(0)
    expect(size({})).toBe(0)
    expect(size(new Set())).toBe(0)
    expect(size(new Map())).toBe(0)
  })

  it('returns the number of enumerable items in a collection', () => {
    expect(size(arr)).toBe(3)
    expect(size(obj)).toBe(2)
    expect(size('foo')).toBe(3)
    expect(size(set)).toBe(3)
    expect(size(map)).toBe(2)
  })
})
