/**
 * Checks if `value` is less than or equal to `other`.
 *
 * @since 1.0.0
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
 *
 * @example
 *
 * lte(1, 2)
 * // => true
 *
 * lte(2, 1)
 * // => false
 *
 * lte(2, 2)
 * // => true
 */

const lte = (value: any, other: any): boolean => value <= other;
export default lte;
