export interface ColorOptions {
    primary?: string
    success?: string
    warning?: string
    danger?: string
    error?: string
    info?: string
}

export interface OutputColors {
    primary?: string[]
    success?: string[]
    warning?: string[]
    danger?: string[]
    error?: string[]
    info?: string[]
}

export interface PresetPalettes {
  chalk?: OutputColors
}
