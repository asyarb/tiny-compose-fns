import { propsEq } from '../../src/object/propsEq'

const obj = {
  foo: 'bar',
  hello: {
    world: 'jest',
    is: {
      great: 'right?',
    },
  },
}

describe('propsEq', () => {
  it('returns true if the properties at the provided key are the same', () => {
    expect(propsEq('foo', obj, obj)).toBe(true)
  })

  it('returns true if nested properties are the same', () => {
    expect(propsEq('hello.world.is', obj, obj)).toBe(true)
  })

  it('returns false if the provided key is not a string', () => {
    expect(propsEq('foo', obj, obj)).not.toBe(false)
  })
})
