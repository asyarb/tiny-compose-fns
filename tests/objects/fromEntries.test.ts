import { fromEntries } from '../../src/object/fromEntries'

const entries = [
  ['foo', 'bar'],
  ['hello', 'world'],
]

describe('fromEntries', () => {
  it('returns an empty object if given an empty array', () => {
    expect(fromEntries([])).toEqual({})
  })

  it('returns an object from a key-value pair array', () => {
    expect(fromEntries(entries)).toEqual({
      foo: 'bar',
      hello: 'world',
    })
  })

  it('returns an empty object if given a non-array', () => {
    expect(fromEntries(undefined)).toEqual({})
    expect(fromEntries(null)).toEqual({})
    expect(fromEntries('foo')).toEqual({})
    expect(fromEntries({})).toEqual({})
  })
})
