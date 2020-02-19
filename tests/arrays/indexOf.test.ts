import { indexOf } from '../../src/array/indexOf'

const arr = [1, 2, 3]
const doubleArr = [...arr, ...arr]

describe('indexOf', () => {
  it('returns the first index of a value in the collection', () => {
    expect(indexOf(2, doubleArr)).toBe(1)
    expect(indexOf(3, doubleArr)).toBe(2)
    expect(indexOf(1, doubleArr)).not.toBe(3)
  })

  it('returns -1 if the value is not in the collection', () => {
    expect(indexOf(4, doubleArr)).toBe(-1)
    expect(indexOf(1, doubleArr)).not.toBe(-1)
  })

  it('returns -1 if searching for undefined or null', () => {
    expect(indexOf(undefined, doubleArr)).toBe(-1)
    expect(indexOf(null, doubleArr)).toBe(-1)
  })
})
