import { sortByDesc } from '../../src/array/sortByDesc'

const arr = [1, 2, 3]
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

describe('sortByDesc', () => {
  it('immutably sorts the array', () => {
    expect(sortByDesc('age', users)).toEqual([
      { user: 'fred', age: 40, active: false },
      { user: 'barney', age: 36, active: true },
      { user: 'pebbles', age: 1, active: true },
    ])

    expect(sortByDesc('user', users)).toEqual([
      { user: 'pebbles', age: 1, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'barney', age: 36, active: true },
    ])

    expect(users).toEqual([
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'pebbles', age: 1, active: true },
    ])
  })

  it('returns an empty array if array is a bad value', () => {
    expect(sortByDesc('', undefined)).toEqual([])
    expect(sortByDesc('', null)).toEqual([])
  })

  it('returns the same array if sortBy key is not valid for the array', () => {
    expect(sortByDesc(undefined, arr)).toEqual(arr)
    expect(sortByDesc(null, arr)).toEqual(arr)
    expect(sortByDesc('foo', arr)).toEqual(arr)
  })
})
