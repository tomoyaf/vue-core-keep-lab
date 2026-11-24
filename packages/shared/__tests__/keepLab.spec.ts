import { isString } from '../src'

describe('keep lab', () => {
  test('lab 1', () => {
    expect(isString('1')).toBe(true)
  })
  test('lab 3', () => {
    expect(isString('3')).toBe(true)
  })
  test('lab 5', () => {
    expect(isString('5')).toBe(true)
  })
  test('lab 7', () => {
    expect(isString('7')).toBe(true)
  })
  test('lab 9', () => {
    expect(isString('9')).toBe(true)
  })
})
