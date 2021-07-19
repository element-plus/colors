import { inputToRGB } from '@ctrl/tinycolor'
import { fuzzyRound, valueInRange } from './number'
import { Color } from '../color'

const WHITE = Color.fromRGB(255, 255, 255)

// Reference to dart-sass's mixColor algorithm
export function mixColor(color1: Color, color2: Color, weight: number): Color {
  const weightScale = valueInRange(weight, 0, 100) / 100
  const normalizedWeight = weightScale * 2 - 1
  const alphaDistance = color1.alpha - color2.alpha

  const combinedWeight = normalizedWeight * alphaDistance == -1
    ? normalizedWeight : (normalizedWeight + alphaDistance) / (1 + normalizedWeight * alphaDistance)
  const weight1 = (combinedWeight + 1) / 2
  const weight2 = 1 - weight1
  return Color.fromRGBA(
    fuzzyRound(color1.red * weight1 + color2.red * weight2),
    fuzzyRound(color1.green * weight1 + color2.green * weight2),
    fuzzyRound(color1.blue * weight1 + color2.blue * weight2),
    color1.alpha * weightScale + color2.alpha * (1 - weightScale)
  )
}

export function strToColor(color: string): Color {
  const colorInfo = inputToRGB(color)
  return Color.fromRGBA(colorInfo.r, colorInfo.g, colorInfo.b, colorInfo.a)
}

export function isValid(color: string): boolean {
  return inputToRGB(color).ok
}

export function generateTypeColors(color: string): Color[] {
  const primary = strToColor(color)
  return [primary, mixColor(WHITE, primary, 80), mixColor(WHITE, primary, 90)]
}

export function generatePrimaryColors(color: string): Color[] {
  const primary = strToColor(color)
  const colors = []
  for (let i = 0; i <= 9; ++i) {
    colors.push(mixColor(WHITE, primary, i * 10))
  }
  return colors
}
