import { startsWith } from '../../src/string/startsWith'

const str = 'fooBarBaz'

describe('startsWith', () => {
  it('returns true if the string starts with the given string', () => {
    expect(startsWith('foo', str)).toBe(true)
    expect(startsWith('Bar', str)).toBe(false)
  })
})
