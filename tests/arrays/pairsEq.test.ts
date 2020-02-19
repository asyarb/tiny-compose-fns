import { pairsEq } from '../../src/array/pairsEq'

describe('pairsEq', () => {
  it('returns true if given identical non-paired inputs', () => {
    expect(pairsEq('foo', 'foo')).toEqual([true])
    expect(pairsEq(1, 1)).toEqual([true])
  })

  it('returns true in an array if given identical falsey inputs', () => {
    expect(pairsEq(undefined, undefined)).toEqual([true])
    expect(pairsEq(null, null)).toEqual([true])
    expect(pairsEq(true, true)).toEqual([true])
    expect(pairsEq(false, false)).toEqual([true])
  })

  it('returns true if given empty arrays', () => {
    expect(pairsEq([], [])).toEqual([true])
  })

  it('returns false if given empty objects', () => {
    expect(pairsEq({}, {})).toEqual([false])
  })
})
