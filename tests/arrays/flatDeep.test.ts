import { flatDeep } from '../../src/array/flatDeep'

const arr = [1, 2, 3]
const deepArr = [[[arr]], [arr], arr]

describe('flatDeep', () => {
  it('removes holes in arrays', () => {
    const holeArr = [1, 2, , 3, 4]

    expect(flatDeep(holeArr)).toEqual([1, 2, 3, 4])
  })

  it('immutably flattens an array deeply', () => {
    expect(flatDeep(deepArr)).toEqual([...arr, ...arr, ...arr])

    expect(deepArr).toEqual([[[arr]], [arr], arr])
  })
})
