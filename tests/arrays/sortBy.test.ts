import { sortBy } from '../../src/array/sortBy'

const arr = [1, 2, 3]
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

describe('sortBy', () => {
  it('immutably sorts the array', () => {
    expect(sortBy('age', users)).toEqual([
      { user: 'pebbles', age: 1, active: true },
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
    ])

    expect(sortBy('user', users)).toEqual([
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'pebbles', age: 1, active: true },
    ])

    expect(users).toEqual([
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'pebbles', age: 1, active: true },
    ])
  })

  it('returns the same value if sortBy key is not valid for the array', () => {
    expect(sortBy('foo', arr)).toEqual(arr)
  })
})
