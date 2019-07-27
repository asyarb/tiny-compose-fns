import {
  get,
  has,
  fromEntries,
  entries,
  keys,
  noop,
  values,
  merge,
} from '../src/base'

// UTILS

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

describe('has', () => {
  it('returns false if passed an undefined or null obj', () => {
    expect(has('foo', undefined)).toBe(false)
    expect(has('foo', null)).toBe(false)
  })

  it('returns false if given a non object', () => {
    expect(has('foo', ['foo'])).toBe(false)
    expect(has('foo', 1)).toBe(false)
  })

  it('returns false if key is not in object', () => {
    expect(has('foo', {})).toBe(false)
    expect(has('hello.is.notGreat', obj)).toBe(false)
  })

  it('returns a true if key is in object', () => {
    expect(has('hello.is.great', obj)).toBe(true)
  })
})

describe('fromEntries', () => {
  const entries = [['foo', 'bar'], ['hello', 'world']]

  it('returns an empty object if given a non-array', () => {
    expect(fromEntries(undefined)).toEqual({})
    expect(fromEntries(null)).toEqual({})
    expect(fromEntries(1)).toEqual({})
    expect(fromEntries('foo')).toEqual({})
    expect(fromEntries({})).toEqual({})
  })

  it('returns an empty object if given an empty array', () => {
    expect(fromEntries([])).toEqual({})
  })

  it('returns an object from a key-value pair array', () => {
    expect(fromEntries(entries)).toEqual({
      foo: 'bar',
      hello: 'world',
    })
  })
})

describe('entries', () => {
  const obj = { foo: 'bar', hello: 'world' }

  it('returns an empty array if given a non-object', () => {
    expect(entries(undefined)).toEqual([])
    expect(entries(null)).toEqual([])
    expect(entries(1)).toEqual([])
    expect(entries('foo')).toEqual([])
  })

  it('returns an empty array if given an empty object', () => {
    expect(entries({})).toEqual([])
  })

  it('returns an array with key value pairs', () => {
    expect(entries(obj)).toEqual([['foo', 'bar'], ['hello', 'world']])
  })
})

describe('keys', () => {
  it('returns an empty array if given a non-object', () => {
    expect(keys(undefined)).toEqual([])
    expect(keys(null)).toEqual([])
    expect(keys(1)).toEqual([])
    expect(keys('foo')).toEqual([])
    expect(keys(noop)).toEqual([])
  })

  it('returns an empty array if given an empty object', () => {
    expect(keys({})).toEqual([])
  })

  it('returns an array of valid keys in an object', () => {
    expect(keys(obj)).toEqual(['foo', 'hello'])
  })
})

describe('values', () => {
  it('returns an empty array if given a non-object', () => {
    expect(values(undefined)).toEqual([])
    expect(values(null)).toEqual([])
    expect(values(1)).toEqual([])
    expect(values('foo')).toEqual([])
    expect(values(noop)).toEqual([])
  })

  it('returns an empty array if given an empty object', () => {
    expect(values({})).toEqual([])
  })

  it('returns an array of valid values in an object', () => {
    expect(values(obj)).toEqual([
      'bar',
      {
        world: 'jest',
        is: {
          great: 'right?',
        },
      },
    ])
  })
})

describe('merge', () => {
  const obj1 = { foo: 'bar' }
  const obj2 = { hello: 'world' }
  const obj3 = { jest: 'is great!' }

  it('returns an empty object if given undefined or null inputs', () => {
    expect(merge()).toMatchObject({})
    expect(merge(null, undefined)).toEqual({})
    expect(merge(null, null)).toEqual({})
  })

  it('returns an empty object if given empty sources', () => {
    expect(merge({}, undefined)).toEqual({})
    expect(merge({}, null)).toEqual({})
    expect(merge({}, {})).toEqual({})
    expect(merge({}, [])).toEqual({})
  })

  it('returns an empty object if given an empty target', () => {
    expect(merge(undefined, {})).toEqual({})
    expect(merge(undefined, [])).toEqual({})
    expect(merge(undefined, 1)).toEqual({})
    expect(merge(undefined, 'foo')).not.toEqual({})
  })

  it('merges strings successfully', () => {
    expect(merge({}, 'foo')).toEqual({
      0: 'f',
      1: 'o',
      2: 'o',
    })
  })

  it('immutably merges object successfully', () => {
    expect(merge(obj1, obj2)).toEqual({
      foo: 'bar',
      hello: 'world',
    })
    expect(obj1).toEqual({ foo: 'bar' })
    expect(obj2).toEqual({ hello: 'world' })
  })

  it('immutably merges several source objects successfully', () => {
    expect(merge(obj1, obj2, obj3)).toEqual({ ...obj1, ...obj2, ...obj3 })

    expect(obj1).toEqual({ foo: 'bar' })
    expect(obj2).toEqual({ hello: 'world' })
    expect(obj3).toEqual({ jest: 'is great!' })
  })

  it('merges sources with a right to left priority', () => {
    const obj1 = { foo: 'bar' }
    const obj2 = { foo: 'baz' }
    const obj3 = { foo: 'final' }

    expect(merge(obj1, obj2, obj3)).toEqual({ foo: 'final' })
  })
})
