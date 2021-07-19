import {
    PRECISION,
    EPSILON,
    valueInRange,
    fuzzyEquals,
    fuzzyCheckRange,
    fuzzyRound,
    fuzzyLessThanOrEquals,
    fuzzyLessThan,
} from '../src/utils/index'

describe('utils/number', () => {

    it('epsilon', () => {
        expect(EPSILON).toEqual(1e-11)
    })

    it('valueInRange', () => {
        expect(valueInRange(1, 1, 10)).toEqual(1)
        expect(valueInRange(2, 1, 10)).toEqual(2)
        expect(valueInRange(10, 1, 10)).toEqual(10)
        expect(valueInRange(1 - Math.pow(10, -PRECISION - 2), 1, 10)).toEqual(1)
        expect(valueInRange(10 - Math.pow(10, -PRECISION - 2), 1, 10)).toEqual(10)
        expect(valueInRange(0, 1, 10)).toEqual(undefined)
        expect(valueInRange(11, 1, 10)).toEqual(undefined)
        expect(valueInRange(1 - EPSILON, 1, 10)).toEqual(undefined)
    })

    it('fuzzyEquals', () => {
        expect(fuzzyEquals(1, 1)).toBeTruthy()
        expect(fuzzyEquals(0.00001, 0.00001)).toBeTruthy()
        expect(fuzzyEquals(1, 1 - EPSILON)).toBeFalsy()
        expect(fuzzyEquals(1, 1 - Math.pow(10, -PRECISION - 2))).toBeTruthy()
    })

    it('fuzzyCheckRange', () => {
        expect(fuzzyCheckRange(1, 1, 10)).toEqual(1)
        expect(fuzzyCheckRange(10, 1, 10)).toEqual(10)
        expect(fuzzyCheckRange(4, 1, 10)).toEqual(4)
        expect(fuzzyCheckRange(11, 1, 10)).toEqual(null)
        expect(fuzzyCheckRange(1 - Math.pow(10, -PRECISION - 2), 1, 10)).toEqual(1)
        expect(fuzzyCheckRange(10 - Math.pow(10, -PRECISION - 2), 1, 10)).toEqual(10)
    })

    it('fuzzyRound', () => {
        expect(fuzzyRound(0.5)).toEqual(1)
        expect(fuzzyRound(0.4)).toEqual(0)
        expect(fuzzyRound(0.49999999999)).toEqual(0)
        expect(fuzzyRound(0.499999999999)).toEqual(1)
        expect(fuzzyRound(-0.5)).toEqual(-1)
        expect(fuzzyRound(-1.5)).toEqual(-2)
        expect(fuzzyRound(-1.1)).toEqual(-1)
        expect(fuzzyRound(0)).toEqual(0)
    })

    it('fuzzyLessThanOrEquals', () => {
        expect(fuzzyLessThanOrEquals(1, 1.1)).toBeTruthy()
        expect(fuzzyLessThanOrEquals(1.1, 1.1)).toBeTruthy()
        expect(fuzzyLessThanOrEquals(1, 1 - Math.pow(10, -PRECISION - 2))).toBeTruthy()
        expect(fuzzyLessThanOrEquals(1.1, 1)).toBeFalsy()
        expect(fuzzyLessThanOrEquals(1, 1 - EPSILON)).toBeFalsy()
    })

    it('fuzzyLessThan', () => {
        expect(fuzzyLessThan(1, 1.1)).toBeTruthy()
        expect(fuzzyLessThan(1, 1)).toBeFalsy()
        expect(fuzzyLessThan(1 - Math.pow(10, -PRECISION - 2), 1)).toBeFalsy()
    })

})
