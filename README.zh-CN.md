# Element Plus Colors

[English](README.md) | [中文](README.zh-CN.md)

这个项目是一个用于构建主题配色的工具

项目中的色彩混合算法参考了 [dart-sass's mixColor](https://github.com/sass/dart-sass/blob/main/lib/src/functions/color.dart#_mixColors) 算法

主题色的计算公式为：
```js
mix('#FFF', primary, i * 10) // i from 0 to 9
```

次要颜色的计算公式为：
```js
mix('#FFF', color, '0')      // secondary color
mix('#FFF', color, '80%')    // secondary light color
mix('#FFF', color, '90%')    // secondary lighter color
```
## 安装

### yarn
```bash
yarn add @element-plus/colors
```
### npm
```bash
npm install @element-plus/colors
```

## 使用

### 基础
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

### 预设颜色

我们提供了一些预设的配色方案，你可以通过`presetPalettes` 或者 `paletteName`导入它们，所有的`paletteName`都会在下方列出
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

chalk是element-plus默认的配色方案

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
options可以是一个字符串或者对象，如果options是一个字符串那么将会被视为主题色。

如果options是一个对象，请参考以下的配置项：
```typescript
// 任何非法的色彩值将会被默认颜色覆盖
interface ColorOptions {
    primary?: string
    success?: string
    warning?: string
    // 如果只提供了error和danger它们其中一个，那么将会自动覆盖给缺失的那一个
    danger?:  string
    error:    string[]
    info?:    string
}
```

如果未提供一个合法的options，那么函数将会返回默认的配色方案（也就是chalk）

### 返回值
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

## 开发环境

```bash
yarn dev
```

同时显示覆盖率
```bash
yarn dev:coverage
```

