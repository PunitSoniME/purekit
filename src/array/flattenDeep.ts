/**
 * Recursively flattens `array`.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to flatten.
 * @returns {any[]} - Returns the new flattened array.
 *
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
 */
const flattenDeep = <T>(array: T[]): any[] => array.flat(Infinity);
export default flattenDeep;
