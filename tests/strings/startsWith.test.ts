import { startsWith } from '../../src/string/startsWith'

describe('startsWith', () => {
  const str = 'fooBarBaz'

  it('returns true if the string starts with the given string', () => {
    expect(startsWith('foo', str)).toBe(true)
    expect(startsWith('Bar', str)).toBe(false)
  })

  it('returns false if given empty parameters', () => {
    expect(startsWith(undefined, str)).toBe(false)
    expect(startsWith(null, str)).toBe(false)
    expect(startsWith(null, null)).toBe(false)
    expect(startsWith('foo', undefined)).toBe(false)
    expect(startsWith('foo', null)).toBe(false)
  })
})
