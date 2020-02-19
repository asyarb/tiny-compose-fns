import { startCase } from '../../src/string/startCase'

describe('startCase', () => {
  it('startCases a string', () => {
    expect(startCase('Foo Bar')).toBe('Foo Bar')
    expect(startCase('here we go')).toBe('Here We Go')
  })

  it('returns an empty string if given an empty string', () => {
    expect(startCase('')).toBe('')
  })
})
