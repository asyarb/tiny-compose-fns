import { flatDepth } from '../../src/array/flatDepth'

const arr = [1, 2, 3]
const deepArr = [[[arr]], [arr], arr]

describe('flatDepth', () => {
  it('removes holes in arrays', () => {
    const holeArr = [1, 2, , 3, 4]

    expect(flatDepth(1, holeArr)).toEqual([1, 2, 3, 4])
  })

  it('immutably flattens an array a with the specified depth level', () => {
    expect(flatDepth(1, deepArr)).toEqual([[arr], arr, ...arr])
    expect(flatDepth(2, deepArr)).toEqual([arr, ...arr, ...arr])
    expect(deepArr).toEqual([[[arr]], [arr], arr])
  })
})
