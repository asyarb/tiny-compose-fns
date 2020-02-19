import { get } from '../../src/object/get'

const obj = {
  foo: 'bar',
  hello: {
    world: 'jest',
    is: {
      great: 'right?',
    },
  },
}

describe('get', () => {
  it('returns a deeply nested value from an object', () => {
    expect(get('hello.is.great', obj)).toBe('right?')
  })

  it('returns undefined if given a non object', () => {
    expect(get('foo', ['foo'])).toBeUndefined()
  })

  it('returns undefined if key is not in object', () => {
    expect(get('foo', {})).toBeUndefined()
    expect(get('hello.is.notGreat', obj)).toBeUndefined()
  })
})
