import { generateColors, chalk } from "../src"

describe('generateColors', () => {

    const DEFAULT_COLORS =  {
        primary: [
            'rgba(64, 158, 255, 1)',
            'rgba(83, 168, 255, 1)',
            'rgba(102, 177, 255, 1)',
            'rgba(121, 187, 255, 1)',
            'rgba(140, 197, 255, 1)',
            'rgba(160, 207, 255, 1)',
            'rgba(179, 216, 255, 1)',
            'rgba(198, 226, 255, 1)',
            'rgba(217, 236, 255, 1)',
            'rgba(236, 245, 255, 1)'
        ],
        success: [
            'rgba(103, 194, 58, 1)',
            'rgba(225, 243, 216, 1)',
            'rgba(240, 249, 235, 1)'
        ],
        warning: [
            'rgba(230, 162, 60, 1)',
            'rgba(250, 236, 216, 1)',
            'rgba(253, 246, 236, 1)'
        ],
        danger: [
            'rgba(245, 108, 108, 1)',
            'rgba(253, 226, 226, 1)',
            'rgba(254, 240, 240, 1)'
        ],
        error: [
          'rgba(245, 108, 108, 1)',
          'rgba(253, 226, 226, 1)',
          'rgba(254, 240, 240, 1)'
        ],
        info: [
            'rgba(144, 147, 153, 1)',
            'rgba(233, 233, 235, 1)',
            'rgba(244, 244, 245, 1)'
        ]
    }

    it('presets', () => {
      expect(chalk).toMatchObject(DEFAULT_COLORS)
    })

    it('options is string', () => {
      expect(generateColors('#409eff')).toMatchObject(DEFAULT_COLORS)
    })

    it('default colors', () => {
        expect(generateColors(null)).toMatchObject(DEFAULT_COLORS)
        expect(generateColors('')).toMatchObject(DEFAULT_COLORS)
        expect(generateColors(undefined)).toMatchObject(DEFAULT_COLORS)
    })

    it('custom colors', () => {
        expect(generateColors({
            primary: '#4286F3',
            success: '#55AF7B',
            warning: '#FAC230',
            danger: '#EB4537'
        })).toMatchObject({
            primary: [
                'rgba(66, 134, 243, 1)',
                'rgba(85, 146, 244, 1)',
                'rgba(104, 158, 245, 1)',
                'rgba(123, 170, 247, 1)',
                'rgba(142, 182, 248, 1)',
                'rgba(161, 195, 249, 1)',
                'rgba(179, 207, 250, 1)',
                'rgba(198, 219, 251, 1)',
                'rgba(217, 231, 253, 1)',
                'rgba(236, 243, 254, 1)'
            ],
            success: [
                'rgba(85, 175, 123, 1)',
                'rgba(221, 239, 229, 1)',
                'rgba(238, 247, 242, 1)'
            ],
            warning: [
                'rgba(250, 194, 48, 1)',
                'rgba(254, 243, 214, 1)',
                'rgba(255, 249, 234, 1)'
            ],
            danger: [
                'rgba(235, 69, 55, 1)',
                'rgba(251, 218, 215, 1)',
                'rgba(253, 236, 235, 1)'
            ],
            error: [
              'rgba(235, 69, 55, 1)',
              'rgba(251, 218, 215, 1)',
              'rgba(253, 236, 235, 1)'
            ],
            info: [
                'rgba(144, 147, 153, 1)',
                'rgba(233, 233, 235, 1)',
                'rgba(244, 244, 245, 1)'
            ]
        })
    })

    it('provide invalid color', () => {
      expect(generateColors({
        primary: '',
        success: '',
        error: '',
        danger: '',
        info: ''
      })).toMatchObject(DEFAULT_COLORS)
    })

    describe('danger & error', () => {
      it('only provide danger, danger should copy to error', () => {
        expect(generateColors({
          danger: '#EB4537'
        })).toMatchObject({
          danger: [
            'rgba(235, 69, 55, 1)',
            'rgba(251, 218, 215, 1)',
            'rgba(253, 236, 235, 1)'
          ],
          error: [
            'rgba(235, 69, 55, 1)',
            'rgba(251, 218, 215, 1)',
            'rgba(253, 236, 235, 1)'
          ],
        })
      })

      it('only provide error, error should copy to danger', () => {
        expect(generateColors({
          error: '#EB4537'
        })).toMatchObject({
          danger: [
            'rgba(235, 69, 55, 1)',
            'rgba(251, 218, 215, 1)',
            'rgba(253, 236, 235, 1)'
          ],
          error: [
            'rgba(235, 69, 55, 1)',
            'rgba(251, 218, 215, 1)',
            'rgba(253, 236, 235, 1)'
          ],
        })
      })

      it('both', () => {
        expect(generateColors({
          danger: '#EB4537',
          error: '#F56C6C'
        })).toMatchObject({
          danger: [
            'rgba(235, 69, 55, 1)',
            'rgba(251, 218, 215, 1)',
            'rgba(253, 236, 235, 1)'
          ],
          error: [
            'rgba(245, 108, 108, 1)',
            'rgba(253, 226, 226, 1)',
            'rgba(254, 240, 240, 1)'
          ],
        })
      })
    })

})
