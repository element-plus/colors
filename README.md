# Element Plus Colors

[English](README.md) | [中文](README.zh-CN.md)

This project for build color utils for theme customization


The mixing algorithm referenced from [dart-sass's mixColor](https://github.com/sass/dart-sass/blob/main/lib/src/functions/color.dart#_mixColors) algorithm

Formula for calculating the primary color:
```js
mix('#FFF', primary, i * 10) // i from 0 to 9
```

Formula for calculating the secondary color:
```js
mix('#FFF', color, '0')      // secondary color
mix('#FFF', color, '80%')    // secondary light color
mix('#FFF', color, '90%')    // secondary lighter color
```

## Install

### yarn
```bash
yarn add @element-plus/colors
```
### npm
```bash
npm install @element-plus/colors
```
## Usage

### Basic
```js
import { generateColors } from '@element-plus/colors'

const { primary, success, warning, danger, error, info } = generateColors('#409eff')
// or
// const { primary, success, warning, danger, error, info } = generateColors({ primary: '#409eff' })
console.log(primary)
// [
//  'rgba(64, 158, 255, 1)',
//  'rgba(83, 168, 255, 1)',
//  'rgba(102, 177, 255, 1)',
//  'rgba(121, 187, 255, 1)',
//  'rgba(140, 197, 255, 1)',
//  'rgba(160, 207, 255, 1)',
//  'rgba(179, 216, 255, 1)',
//  'rgba(198, 226, 255, 1)',
//  'rgba(217, 236, 255, 1)',
//  'rgba(236, 245, 255, 1)'
// ]
console.log(success)
// [
//  'rgba(103, 194, 58, 1)',
//  'rgba(225, 243, 216, 1)',
//  'rgba(240, 249, 235, 1)'
// ]
console.log(warning)
// [
//  'rgba(230, 162, 60, 1)',
//  'rgba(250, 236, 216, 1)',
//  'rgba(253, 246, 236, 1)'
// ]
console.log(danger)
// [
//  'rgba(245, 108, 108, 1)',
//  'rgba(253, 226, 226, 1)',
//  'rgba(254, 240, 240, 1)'
// ]
console.log(error)
// [
//  'rgba(245, 108, 108, 1)',
//  'rgba(253, 226, 226, 1)',
//  'rgba(254, 240, 240, 1)'
// ]
console.log(info)
// [
//  'rgba(144, 147, 153, 1)',
//  'rgba(233, 233, 235, 1)',
//  'rgba(244, 244, 245, 1)'
// ]
```

### Preset colors

We provide preset colors, you can import them by `presetPalettes` or `paletteName`, all `paletteName` are listed below

```js
import { presetPalettes } from '@element-plus/colors'
// or
import { chalk } from '@element-plus/colors'

console.log(presetPalettes)
// {
//     chalk: {
//         primary: [...]
//         success: [...]
//         warning: [...]
//         danger:  [...]
//         error:   [...]
//         info:    [...]
//     }
// }
console.log(chalk)
// {
//     primary: [...]
//     success: [...]
//     warning: [...]
//     danger:  [...]
//     error:   [...]
//     info:    [...]
// }
```

#### chalk

chalk is the default theme of element-plus

```json
{
  "primary":  "#409EFF",
  "success":  "#67C23A",
  "warning":  "#E6A23C",
  "danger":   "#F56C6C",
  "error":    "#F56C6C",
  "info":     "#909399"
}
```

## API

### generateColors(options: string | object)

#### options
options can be a string or an object, if options is a string then it means it is a primary color.

if options is an object, the following configuration:
```typescript
// Any invalid color will be overwritten by the default color
interface ColorOptions {
    primary?: string
    success?: string
    warning?: string
    // If only one of error and danger is provided,
    // then that value will automatically be used to override the missing one
    danger?:  string
    error:    string[]
    info?:    string
}
```
If you not provide any valid options, then the function will return the default colors

#### return
```typescript
interface OutputColors {
    primary: string[]
    success: string[]
    warning: string[]
    danger:  string[]
    error:   string[]
    info:    string[]
}
```

## Development

```bash
yarn dev
```

for coverage
```bash
yarn dev:coverage
```
