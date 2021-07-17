import Color from '../src/color'

describe('color', () => {

  it('for coverage', () => {
    const color = new Color()
    expect(color.toHexString()).toEqual('#000000')
  })

})
