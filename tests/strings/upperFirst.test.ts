import { upperFirst } from '../../src/string/upperFirst'

describe('upperFirst', () => {
  it('returns an empty string on undefined or null', () => {
    expect(upperFirst()).toBe('')
    expect(upperFirst(null)).toBe('')
  })

  it('returns an empty string if not given a string', () => {
    expect(upperFirst(123)).toBe('')
    expect(upperFirst([])).toBe('')
    expect(upperFirst({})).toBe('')
    expect(upperFirst(noop)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(upperFirst('')).toBe('')
  })

  it('upperFirsts a string', () => {
    expect(upperFirst('foo')).toBe('Foo')
  })
})
