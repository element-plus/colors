import { generateTypeColors, generatePrimaryColors, isValid } from './utils/index'
import { DEFAULT_COLOR_OPTIONS } from './defaults'
import type { OutputColors, ColorOptions } from './types'

// For the semantic compromise If only one of error and danger is provide,
// then that value will automatically be used to override the missing one
function forSemantic(options: ColorOptions) {
  if (!options) return
  if ('danger' in options && (!('error' in options) || !options['error'])) {
    options.error = options.danger
  } else if('error' in options && (!('danger' in options) || !options['danger'])) {
    options.danger = options.error
  }
}

function handleDefaults(options: ColorOptions) {
  Object.keys(options).forEach(color => {
    if (!options[color] || !isValid(options[color])) {
      options[color] = DEFAULT_COLOR_OPTIONS[color]
    }
  })
}

export function generateColors(options: string | ColorOptions = DEFAULT_COLOR_OPTIONS): OutputColors {
  let colorOptions = options
  // normalized parameter
  if (typeof colorOptions !== 'object') {
    colorOptions = {
      primary: typeof colorOptions === 'string' && colorOptions.trim() ? colorOptions : DEFAULT_COLOR_OPTIONS.primary,
    }
  }
  forSemantic(colorOptions)
  colorOptions = { ...DEFAULT_COLOR_OPTIONS, ...colorOptions }
  handleDefaults(colorOptions)
  const colors: OutputColors = {}
  Object.keys(colorOptions).forEach(colorName => {
    const color = colorOptions[colorName]
    if (colorName === 'primary') {
      colors[colorName] = generatePrimaryColors(color).map(c => c.toRBGAString())
    } else {
      colors[colorName] = generateTypeColors(color).map(c => c.toRBGAString())
    }
  })
  return colors
}
