import { has } from '../../src/object/has'

const obj = {
  foo: 'bar',
  hello: {
    world: 'jest',
    is: {
      great: 'right?',
    },
  },
}

describe('has', () => {
  it('returns false if passed an undefined or null obj', () => {
    expect(has('foo', undefined)).toBe(false)
    expect(has('foo', null)).toBe(false)
  })

  it('returns false if given a non object', () => {
    expect(has('foo', ['foo'])).toBe(false)
  })

  it('returns false if key is not in object', () => {
    expect(has('foo', {})).toBe(false)
    expect(has('hello.is.notGreat', obj)).toBe(false)
  })

  it('returns a true if key is in object', () => {
    expect(has('hello.is.great', obj)).toBe(true)
  })
})
