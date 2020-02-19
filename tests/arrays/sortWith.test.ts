import { sortWith } from '../../src/array/sortWith'

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]

describe('sortWith', () => {
  it('immutably sorts the array if provided a custom function comparator', () => {
    expect(
      sortWith((first, second) => {
        if (first.age < second.age) return -1
        if (first.age === second.age) return 0
        if (first.age > second.age) return 1

        return 0
      }, users)
    ).toEqual([
      { user: 'pebbles', age: 1, active: true },
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
    ])

    expect(users).toEqual([
      { user: 'barney', age: 36, active: true },
      { user: 'fred', age: 40, active: false },
      { user: 'pebbles', age: 1, active: true },
    ])
  })
})
