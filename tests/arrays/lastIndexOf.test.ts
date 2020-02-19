import { lastIndexOf } from '../../src/array/lastIndexOf'

const arr = [1, 2, 3]
const doubleArr = [...arr, ...arr]

describe('lastIndexOf', () => {
  it('returns the last index of a value in the collection', () => {
    expect(lastIndexOf(2, doubleArr)).toBe(4)
    expect(lastIndexOf(3, doubleArr)).toBe(5)
    expect(lastIndexOf(1, doubleArr)).not.toBe(0)
  })

  it('returns -1 if the value is not in the collection', () => {
    expect(lastIndexOf(4, doubleArr)).toBe(-1)
    expect(lastIndexOf(1, doubleArr)).not.toBe(-1)
  })

  it('returns -1 if searching for undefined or null', () => {
    expect(lastIndexOf(undefined, doubleArr)).toBe(-1)
    expect(lastIndexOf(null, doubleArr)).toBe(-1)
  })

  it('returns -1 if passed an undefined or null collection to search', () => {
    expect(lastIndexOf(1, undefined)).toBe(-1)
    expect(lastIndexOf(1, null)).toBe(-1)
  })
})
