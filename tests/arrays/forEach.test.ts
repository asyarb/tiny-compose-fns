import { forEach } from '../../src/array/forEach'
import { noop } from '../../src/utils/noop'

const arr = [1, 2, 3]

describe('forEach', () => {
  it('immutably runs a sideeffect over an array', () => {
    let sum = 0

    forEach(x => (sum += x), arr)

    expect(sum).toBe(6)
  })

  it('returns undefined', () => {
    expect(forEach(noop, [1, 2, 3])).toBe(undefined)
  })
})
