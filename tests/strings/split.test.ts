import { split } from '../../src/string/split'

const str = 'foo bar baz'

describe('split', () => {
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
