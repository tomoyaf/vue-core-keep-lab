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
  test('lab 11', () => {
    expect(isString('11')).toBe(true)
  })
  test('lab 13', () => {
    expect(isString('13')).toBe(true)
  })
  test('lab 15', () => {
    expect(isString('15')).toBe(true)
  })
  test('lab 17', () => {
    expect(isString('17')).toBe(true)
  })
  test('lab 19', () => {
    expect(isString('19')).toBe(true)
  })
})
