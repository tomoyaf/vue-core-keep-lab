import { isString } from '../src'

describe('keep lab', () => {
  test('lab 2', () => {
    expect(isString('2')).toBe(true)
  })
  test('lab 4', () => {
    expect(isString('4')).toBe(true)
  })
  test('lab 6', () => {
    expect(isString('6')).toBe(true)
  })
  test('lab 8', () => {
    expect(isString('8')).toBe(true)
  })
  test('lab 10', () => {
    expect(isString('10')).toBe(true)
  })
  test('lab 12', () => {
    expect(isString('12')).toBe(true)
  })
})
