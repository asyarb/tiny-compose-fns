import { castArray } from '../../src/array/castArray'

describe('castArray', () => {
  it('returns an empty array if given an array', () => {
    expect(castArray([])).toEqual([])
  })

  it('returns an array with the value in it', () => {
    expect(castArray(1)).toEqual([1])
    expect(castArray({ foo: 'bar' })).toEqual([{ foo: 'bar' }])
    expect(castArray('fooBar')).toEqual(['fooBar'])
    expect(castArray(null)).toEqual([null])
    expect(castArray(undefined)).toEqual([undefined])
  })
})
