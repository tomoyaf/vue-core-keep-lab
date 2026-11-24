import { isString } from '../src'

describe('keep lab', () => {
  test('lab 2', () => {
    expect(isString('2')).toBe(true)
  })
  test('lab 4', () => {
    expect(isString('4')).toBe(true)
  })
})
