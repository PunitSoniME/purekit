/**
 * Checks if `value` is greater than or equal to `other`.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to compare.
 * @param {*} other - The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
 *
 * @example
 *
 * gte(3, 1);
 * // => true
 *
 * gte(1, 3);
 * // => false
 *
 * gte(2, 2);
 * // => true
 */
const gte = (value: any, other: any): boolean => value >= other;
export default gte;
