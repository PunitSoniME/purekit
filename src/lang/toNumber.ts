/**
 * Converts a value to a number.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to convert to a number.
 * @returns {number} The converted number.
 *
 * @example
 *
 * toNumber('123') // 123
 * toNumber('abc') // NaN
 * toNumber(null) // 0
 * toNumber(undefined) // NaN
 * toNumber({}) // NaN
 */
const toNumber = (value: any): number => Number(value);
export default toNumber;
