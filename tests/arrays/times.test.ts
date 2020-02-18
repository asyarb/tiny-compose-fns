import { times } from '../../src/array/times'
import { noop } from '../../src/utils/noop'

describe('times', () => {
  it('returns an empty array if provided falsey values', () => {
    expect(times(null, null)).toEqual([])
  })

  it('returns an empty array if the provided number is 0', () => {
    expect(times(noop, 0)).toEqual([])
  })

  it('returns an array containing the invoked function the passed number of times', () => {
    expect(times(noop, 4)).toEqual([undefined, undefined, undefined, undefined])
    expect(times(() => 1, 4)).toEqual([1, 1, 1, 1])
  })
})
