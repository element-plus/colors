export const PRECISION = 10

export const EPSILON = Math.pow(10, -PRECISION - 1)

export function fuzzyEquals(number1: number, number2: number) {
  return Math.abs(number1 - number2) < EPSILON
}

export function valueInRange(value, min, max) {
  const result = fuzzyCheckRange(value, min, max)
  if (result !== null) return result
}

export function fuzzyCheckRange (number: number, min: number, max: number) {
  if (fuzzyEquals(number, min)) return min
  if (fuzzyEquals(number, max)) return max
  if (number > min && number < max) return number
  return null
}

export function fuzzyRound(value: number) {
  if (value > 0) {
    return fuzzyLessThan(value % 1, 0.5) ? Math.floor(value) : Math.ceil(value)
  } else {
    return fuzzyLessThan(Math.abs(value % 1), 0.5)
      ? Math.ceil(value)
      : Math.floor(value)
  }
}

export function fuzzyLessThanOrEquals(number1: number, number2: number) {
  return number1 < number2 || fuzzyEquals(number1, number2)
}

export function fuzzyLessThan(number1: number, number2: number) {
  return number1 < number2 && !fuzzyEquals(number1, number2)
}

