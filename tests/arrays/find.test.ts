import { find } from '../../src/array/find'

const arr = [1, 2, 3]
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]
const cb = () => true

describe('find', () => {
  it('returns the searched value', () => {
    expect(find(item => item === 2, arr)).toBe(2)
    expect(find(item => item === 3, arr)).toBe(3)
    expect(find(item => item.user === 'fred', users)).toEqual(users[1])
  })

  it('throws error if function is bad', () => {
    expect(() => find(undefined, arr)).toThrow()
    expect(() => find(null, arr)).toThrow()
  })

  it('returns undefined if collection is bad', () => {
    expect(find(cb, undefined)).toBeUndefined()
    expect(find(cb, null)).toBeUndefined()
  })

  it('returns undefined if searched value is not in the collection', () => {
    expect(find(item => item === 4, arr)).toBeUndefined()
    expect(find(item => item.user === 'bob', users)).toBeUndefined()
  })
})
