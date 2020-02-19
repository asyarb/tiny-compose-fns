import { merge } from '../../src/object/merge'

describe('merge', () => {
  const obj1 = { foo: 'bar' }
  const obj2 = { hello: 'world' }
  const obj3 = { jest: 'is great!' }

  it('returns an empty object if given undefined or null inputs', () => {
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