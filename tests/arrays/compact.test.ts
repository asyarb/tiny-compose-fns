import { compact } from '../../src/array/compact'

const falseyArr = [false, 0, '', undefined, NaN, 1, 2, 3]

describe('compact', () => {
  it('immutably returns a new compacted array', () => {
    expect(compact(falseyArr)).toEqual([1, 2, 3])
    expect(falseyArr).toEqual([false, 0, '', undefined, NaN, 1, 2, 3])
  })

  it('returns an empty array given bad inputs', () => {
    expect(compact(undefined)).toEqual([])
    expect(compact(null)).toEqual([])
  })
})
