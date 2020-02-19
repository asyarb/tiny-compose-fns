import { forEach } from '../../src/array/forEach'
import { noop } from '../../src/utils/noop'

const arr = [1, 2, 3]

describe('forEach', () => {
  it('throws error if provided a bad function', () => {
    expect(() => forEach(undefined, undefined)).toThrow()
    expect(() => forEach(undefined, null)).toThrow()
    expect(() => forEach(undefined, [])).toThrow()

    expect(() => forEach(null, undefined)).toThrow()
    expect(() => forEach(null, null)).toThrow()
    expect(() => forEach(null, [])).toThrow()
  })

  it('returns undefined', () => {
    expect(forEach(noop, [1, 2, 3])).toBe(undefined)
  })

  it('immutably runs a sideeffect over an array', () => {
    let sum = 0

    forEach(x => (sum += x), arr)

    expect(sum).toBe(6)
  })
})
