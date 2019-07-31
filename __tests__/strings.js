import {
  startsWith,
  replace,
  split,
  noop,
  lowercase,
  camelCase,
  uppercase,
  upperFirst,
  trim,
  startCase,
} from '../dist/noFp'

describe('startsWith', () => {
  const str = 'fooBarBaz'

  it('returns false if given empty parameters', () => {
    expect(startsWith()).toBe(false)
    expect(startsWith(undefined, str)).toBe(false)
    expect(startsWith(null, str)).toBe(false)
    expect(startsWith(null, null)).toBe(false)
    expect(startsWith('foo', undefined)).toBe(false)
    expect(startsWith('foo', null)).toBe(false)
  })

  it('returns true if the string starts with the given string', () => {
    expect(startsWith('foo', str)).toBe(true)
    expect(startsWith('Bar', str)).toBe(false)
    expect(startsWith(1, '123')).toBe(true)
  })

  it('can search from a specified index', () => {
    expect(startsWith('Bar', str, 3)).toBe(true)
    expect(startsWith('foo', str, 3)).toBe(false)
    expect(startsWith(2, '123', 1)).toBe(true)
  })
})

describe('replace', () => {
  const str = 'The quick brown fox jumps over the lazy dog.'
  const regex = /dog/gi

  it('returns empty string if str parameter is undefined or null', () => {
    expect(replace()).toBe('')
    expect(replace(null, null, null)).toBe('')
    expect(replace(regex, 'foo', null)).toBe('')
  })

  it('returns the same string if regex is undefined or null', () => {
    expect(replace(undefined, 'foo', str)).toBe(str)
    expect(replace(null, 'foo', str)).toBe(str)
  })

  it('returns the same string if regex is not valid', () => {
    expect(replace(1, 'foo', str)).toBe(str)
    expect(replace({}, 'foo', str)).toBe(str)
    expect(replace(noop, 'foo', str)).toBe(str)
  })

  it('returns string with toString value if replacement is an object-type', () => {
    expect(replace(regex, [], str)).toBe(
      'The quick brown fox jumps over the lazy .'
    )
    expect(replace(regex, {}, str)).toBe(
      'The quick brown fox jumps over the lazy [object Object].'
    )
  })

  it('replaces the regex pattern with the specified replacement', () => {
    expect(replace(regex, 'foo', str)).toBe(
      'The quick brown fox jumps over the lazy foo.'
    )
    expect(replace(regex, 1, str)).toBe(
      'The quick brown fox jumps over the lazy 1.'
    )
    expect(replace(regex, null, str)).toBe(
      'The quick brown fox jumps over the lazy null.'
    )
    expect(replace(regex, undefined, str)).toBe(
      'The quick brown fox jumps over the lazy undefined.'
    )
    expect(replace([], 'foo', str)).toBe(`foo${str}`)
  })
})

describe('split', () => {
  const str = 'foo bar baz'

  it('returns an array with a single empty string if given undefined parameters', () => {
    expect(split()).toEqual([''])
    expect(split(null, undefined)).toEqual([''])
    expect(split(null, null)).toEqual([''])
  })

  it('returns an array with the string if delimiter is undefined or null', () => {
    expect(split(undefined, str)).toEqual([str])
    expect(split(null, str)).toEqual([str])
  })

  it('returns an array with the string if the delimiter is not in the string', () => {
    expect(split(1, str)).toEqual([str])
    expect(split('boo', str)).toEqual([str])
    expect(split({}, str)).toEqual([str])
  })

  it('returns an array split by letter if the delimiter is an empty string or array', () => {
    expect(split([], str)).toEqual([
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

describe('lowercase', () => {
  it('returns an empty string on undefined or null', () => {
    expect(lowercase()).toBe('')
    expect(lowercase(null)).toBe('')
  })

  it('returns an empty string if not given a string', () => {
    expect(lowercase(123)).toBe('')
    expect(lowercase([])).toBe('')
    expect(lowercase({})).toBe('')
    expect(lowercase(noop)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(lowercase('')).toBe('')
  })

  it('lowercases a string', () => {
    expect(lowercase('FOO')).toBe('foo')
    expect(lowercase('WeIrD cASe')).toBe('weird case')
  })
})

describe('uppercase', () => {
  it('returns an empty string on undefined or null', () => {
    expect(uppercase()).toBe('')
    expect(uppercase(null)).toBe('')
  })

  it('returns an empty string if not given a string', () => {
    expect(uppercase(123)).toBe('')
    expect(uppercase([])).toBe('')
    expect(uppercase({})).toBe('')
    expect(uppercase(noop)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(uppercase('')).toBe('')
  })

  it('uppercases a string', () => {
    expect(uppercase('foo')).toBe('FOO')
    expect(uppercase('WeIrD cASe')).toBe('WEIRD CASE')
  })
})

describe('upperFirst', () => {
  it('returns an empty string on undefined or null', () => {
    expect(upperFirst()).toBe('')
    expect(upperFirst(null)).toBe('')
  })

  it('returns an empty string if not given a string', () => {
    expect(upperFirst(123)).toBe('')
    expect(upperFirst([])).toBe('')
    expect(upperFirst({})).toBe('')
    expect(upperFirst(noop)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(upperFirst('')).toBe('')
  })

  it('upperFirsts a string', () => {
    expect(upperFirst('foo')).toBe('Foo')
    expect(upperFirst('weIrD cASe')).toBe('WeIrD cASe')
  })
})

describe('camelCase', () => {
  it('returns an empty string on undefined or null', () => {
    expect(camelCase()).toBe('')
    expect(camelCase(null)).toBe('')
  })

  it('returns an empty string if not given a string', () => {
    expect(camelCase(123)).toBe('')
    expect(camelCase([])).toBe('')
    expect(camelCase({})).toBe('')
    expect(camelCase(noop)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(camelCase('')).toBe('')
  })

  it('camelCases a string', () => {
    expect(camelCase('FOO BAR')).toBe('fooBar')
    expect(camelCase('WeIrD cASe')).toBe('weirdCase')
  })
})

describe('trim', () => {
  it('returns an empty string on undefined or null', () => {
    expect(trim()).toBe('')
    expect(trim(null)).toBe('')
  })

  it('returns an empty string if not given a string', () => {
    expect(trim(123)).toBe('')
    expect(trim([])).toBe('')
    expect(trim({})).toBe('')
    expect(trim(noop)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(trim('')).toBe('')
  })

  it('trims a string', () => {
    expect(trim('  foo bar   ')).toBe('foo bar')
    expect(trim('foo bar   ')).toBe('foo bar')
    expect(trim('   foo bar')).toBe('foo bar')
  })
})

describe('startCase', () => {
  it('returns an empty string on undefined or null', () => {
    expect(startCase()).toBe('')
    expect(startCase(null)).toBe('')
  })

  it('returns an empty string if not given a string', () => {
    expect(startCase(123)).toBe('')
    expect(startCase([])).toBe('')
    expect(startCase({})).toBe('')
    expect(startCase(noop)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(startCase('')).toBe('')
  })

  it('startCases a string', () => {
    expect(startCase('Foo Bar')).toBe('Foo Bar')
    expect(startCase('here we go')).toBe('Here We Go')
  })
})
