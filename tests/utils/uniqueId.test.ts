import { uniqueId } from '../../src/utils/uniqueId'

describe('uniqueId', () => {
  it('returns a unique value on every call', () => {
    expect(uniqueId()).toBe('1')
    expect(uniqueId()).toBe('2')
    expect(uniqueId()).toBe('3')
  })

  it('returns a unique value on every call with the provided prefix', () => {
    expect(uniqueId('foo')).toBe('foo4')
    expect(uniqueId('foo')).toBe('foo5')
    expect(uniqueId('foo')).toBe('foo6')
  })
})
