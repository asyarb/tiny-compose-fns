import { sortWith } from '../../src/array/sortWith'

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]
type User = typeof users[0]

const comparator = (first: User, second: User) => {
  if (first.age < second.age) return -1
  if (first.age === second.age) return 0
  if (first.age > second.age) return 1
}

describe('sortWith', () => {
  it('immutably sorts the array if provided a custom function comparator', () => {
    expect(sortWith(comparator, users)).toEqual([
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
