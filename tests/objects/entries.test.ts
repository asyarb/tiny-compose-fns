import { entries } from '../../src/object/entries'

const obj = { foo: 'bar', hello: 'world' }

describe('entries', () => {
  it('returns an empty array if given an empty object', () => {
    expect(entries({})).toEqual([])
  })

  it('returns an array with key value pairs', () => {
    expect(entries(obj)).toEqual([
      ['foo', 'bar'],
      ['hello', 'world'],
    ])
  })

  it('returns an empty array if given a non-object', () => {
    expect(entries(undefined)).toEqual([])
    expect(entries(null)).toEqual([])
  })
})
