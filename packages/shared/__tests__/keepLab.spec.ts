import { isString } from '../src'

describe('keep lab', () => {
  test('lab 1', () => {
    expect(isString('1')).toBe(true)
  })
})
