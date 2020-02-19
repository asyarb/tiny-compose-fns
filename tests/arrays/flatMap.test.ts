import { flatMap } from '../../src/array/flatMap'

const arr = [1, 2, 3]
const deepArr = [arr, arr, arr]

describe('flatMap', () => {
  it('removes holes in arrays', () => {
    const holeArr = [1, 2, , 3, 4]

    expect(flatMap(() => 1, holeArr)).toEqual([1, 1, 1, 1])
  })

  it('immutably maps and then flattens over an array ', () => {
    expect(flatMap(i => i, deepArr)).toEqual([...arr, ...arr, ...arr])
    expect(flatMap(() => 1, deepArr)).toEqual([1, 1, 1])

    expect(deepArr).toEqual([arr, arr, arr])
  })
})
