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
  kebabCase,
} from '../noFp'

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
  })
})

describe('kebabCase', () => {
  it('returns an empty string on undefined or null', () => {
    expect(kebabCase()).toBe('')
    expect(kebabCase(null)).toBe('')
  })

  it('returns an empty string if not given a string', () => {
    expect(kebabCase(123)).toBe('')
    expect(kebabCase([])).toBe('')
    expect(kebabCase({})).toBe('')
    expect(kebabCase(noop)).toBe('')
  })

  it('returns an empty string if given an empty string', () => {
    expect(kebabCase('')).toBe('')
  })

  it('kebabCases a string', () => {
    expect(kebabCase('FOO BAR')).toBe('foo-bar')
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
