import { get } from '../src'

// UTILS

describe('Objects', () => {
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
    it('returns undefined if passed an undefined or null obj', () => {
      expect(get('foo', undefined)).toBeUndefined()
      expect(get('foo', null)).toBeUndefined()
    })

    it('returns undefined if given a non object', () => {
      expect(get('foo', ['foo'])).toBeUndefined()
      expect(get('foo', 1)).toBeUndefined()
    })

    it('returns undefined if key is not in object', () => {
      expect(get('foo', {})).toBeUndefined()
      expect(get('hello.is.notGreat', obj)).toBeUndefined()
    })

    it('returns a deeply nested value from an object', () => {
      expect(get('hello.is.great', obj)).toBe('right?')
    })
  })
})
