import { zip } from '../../src/array/zip'

const arr = [1, 2, 3]

describe('zip', () => {
  it('zips two arrays with differing elements', () => {
    const arr2 = [4, 5, 6, 7]

    expect(zip(arr, arr2)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
      [undefined, 7],
    ])
  })

  it('zips two arrays into grouped elements', () => {
    const arr2 = [4, 5, 6]

    expect(zip(arr, arr2)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ])
  })

  it('zips other values into grouped elements', () => {
    expect(zip('foo', 'bar')).toEqual([['foo', 'bar']])
    expect(zip(1, {})).toEqual([[1, {}]])
  })

  it('zips falsey inputs into an array', () => {
    expect(zip(undefined, undefined)).toEqual([[undefined, undefined]])
    expect(zip(null, null)).toEqual([[null, null]])
    expect(zip(false, false)).toEqual([[false, false]])
  })
})
