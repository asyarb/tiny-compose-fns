import { values } from '../../src/object/values'

const obj = {
  foo: 'bar',
  hello: {
    world: 'jest',
    is: {
      great: 'right?',
    },
  },
}

describe('values', () => {
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
