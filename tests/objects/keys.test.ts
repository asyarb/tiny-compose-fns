import { keys } from '../../src/object/keys'

const obj = {
  foo: 'bar',
  hello: {
    world: 'jest',
    is: {
      great: 'right?',
    },
  },
}

describe('keys', () => {
  it('returns an empty array if given a non-object', () => {
    expect(keys(undefined)).toEqual([])
    expect(keys(null)).toEqual([])
  })

  it('returns an empty array if given an empty object', () => {
    expect(keys({})).toEqual([])
  })

  it('returns an array of valid keys in an object', () => {
    expect(keys(obj)).toEqual(['foo', 'hello'])
  })
})
