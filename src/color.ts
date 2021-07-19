import { pad2 } from './utils/string'

export class Color {

  constructor(public red = 0, public green = 0, public blue = 0, public alpha = 1) {}

  static fromRGB(red: number, green: number, blue: number): Color {
    return new Color(red, green, blue, 1)
  }

  static fromRGBA(red: number, green: number, blue: number, alpha: number): Color {
    return new Color(red, green, blue, alpha)
  }

  toHexString() {
    const prefix = '#'
    const red = pad2(this.red.toString(16))
    const green = pad2(this.green.toString(16))
    const blue = pad2(this.blue.toString(16))
    return `${prefix}${red}${green}${blue}`.toUpperCase()
  }

  toRBGAString() {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`
  }
}

export default Color
