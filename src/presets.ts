import { DEFAULT_COLOR_OPTIONS } from './defaults'
import { generateColors } from './generate-colors'
import type { PresetPalettes } from './types'

const presetColors = {
  chalk: DEFAULT_COLOR_OPTIONS,
}

const presetPalettes: PresetPalettes = {}

Object.keys(presetColors).forEach(name => {
  presetPalettes[name] = generateColors(presetColors[name])
})

const chalk = presetPalettes.chalk

export {
  presetPalettes,
  chalk,
}

