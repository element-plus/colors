import { mixColor, strToColor, generateTypeColors, generatePrimaryColors } from '../src/utils/function'
import { Color } from '../src/color'

describe('utils/function', () => {

    const PRIMARY = '#409eff'
    const SUCCESS = '#67c23a'
    const WARNING = '#e6a23c'
    const DANGER = '#f56c6c'
    const INFO = '#909399'

    const PRIMARY_COLORS = [
        '#409EFF',
        '#53A8FF',
        '#66B1FF',
        '#79BBFF',
        '#8CC5FF',
        '#A0CFFF',
        '#B3D8FF',
        '#C6E2FF',
        '#D9ECFF',
        '#ECF5FF'
    ]

    const SUCCESS_LIGHT = '#E1F3D8'
    const SUCCESS_LIGHT2 = '#F0F9EB'

    const WARNING_LIGHT = '#FAECD8'
    const WARNING_LIGHT2 = '#FDF6EC'

    const DANGER_LIGHT = '#FDE2E2'
    const DANGER_LIGHT2 = '#FEF0F0'

    const INFO_LIGHT = '#E9E9EB'
    const INFO_LIGHT2 = '#F4F4F5'

    describe('mixColor', () => {
      it('weight = 0', () => {
        expect(mixColor(
          strToColor('#FFF'),
          new Color(255, 0, 0, 0),0)
        ).toMatchObject({
          red: 255,
          green: 0,
          blue: 0,
          alpha: 0
        })
      })
    })

    describe('colors', () => {
        it('primary color', () => {
            generatePrimaryColors(PRIMARY).forEach((color, i) => {
                expect(color.toHexString()).toEqual(PRIMARY_COLORS[i])
            })
        })

        it('success colors', () => {
            const colors = generateTypeColors(SUCCESS)
            expect(colors[1].toHexString()).toEqual(SUCCESS_LIGHT)
            expect(colors[2].toHexString()).toEqual(SUCCESS_LIGHT2)
        })

        it('warning colors', () => {
            const colors = generateTypeColors(WARNING)
            expect(colors[1].toHexString()).toEqual(WARNING_LIGHT)
            expect(colors[2].toHexString()).toEqual(WARNING_LIGHT2)
        })

        it('danger colors', () => {
            const colors = generateTypeColors(DANGER)
            expect(colors[1].toHexString()).toEqual(DANGER_LIGHT)
            expect(colors[2].toHexString()).toEqual(DANGER_LIGHT2)
        })

        it('info colors', () => {
            const colors = generateTypeColors(INFO)
            expect(colors[1].toHexString()).toEqual(INFO_LIGHT)
            expect(colors[2].toHexString()).toEqual(INFO_LIGHT2)
        })
    })

})
