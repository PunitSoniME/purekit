/**
 * Checks if `value` is less than `other`.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to compare.
 * @param {*} other - The other value to compare.
 * @returns {boolean} - Returns `true` if `value` is less than `other`, else `false`.
 *
 * @example
 * lt(1, 3); // => true
 * lt(3, 1); // => false
 * lt('a', 'z'); // => true
 */
const lt = (value: any, other: any): boolean => value < other;
export default lt;
