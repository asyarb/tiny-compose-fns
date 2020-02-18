import { noop } from '../../src/utils/noop'

describe('noop', () => {
  it('should return undefined', () => {
    expect(noop()).toBeUndefined()
  })
})
