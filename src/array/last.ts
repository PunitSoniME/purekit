/**
 * Returns the last element of an array.
 *
 * @since 1.0.0
 *
 * @param {Array} array - The array to query.
 * @returns {*} - Returns the last element of the array.
 *
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 *
 * last([])
 * // => undefined
 */
const last = <T>(array: T[]): T | undefined => array[array.length - 1];
export default last;
