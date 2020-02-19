import { some } from '../../src/array/some'

const arr = [1, 2, 3]
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
]
const cb = () => true

describe('some', () => {
  it('returns true if an element matches the function criteria', () => {
    expect(some(i => i === 2, arr)).toBe(true)
    expect(some(i => i.user === 'fred', users)).toBe(true)
  })

  it('returns false if arr is empty', () => {
    expect(some(cb, [])).toBe(false)
  })
})
