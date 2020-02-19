import { split } from '../../src/string/split'

describe('split', () => {
  const str = 'foo bar baz'

  it('returns an array with a single empty string if given undefined parameters', () => {
    expect(split(null, undefined)).toEqual([''])
    expect(split(null, null)).toEqual([''])
  })

  it('returns an array with the string if delimiter is undefined or null', () => {
    expect(split(undefined, str)).toEqual([str])
    expect(split(null, str)).toEqual([str])
  })

  it('returns an array with the string if the delimiter is not in the string', () => {
    expect(split('boo', str)).toEqual([str])
  })

  it('returns an array split by letter if the delimiter is an empty string', () => {
    expect(split('', str)).toEqual([
      'f',
      'o',
      'o',
      ' ',
      'b',
      'a',
      'r',
      ' ',
      'b',
      'a',
      'z',
    ])
  })

  it('returns an array split via the specified delimiter', () => {
    expect(split(' ', str)).toEqual(['foo', 'bar', 'baz'])
    expect(split('', str)).toEqual([
      'f',
      'o',
      'o',
      ' ',
      'b',
      'a',
      'r',
      ' ',
      'b',
      'a',
      'z',
    ])
  })
})
