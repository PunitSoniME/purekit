/**
 * Returns the last element of an array.
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
