/**
 * Flattens an array up to the specified depth.
 *
 * @since 1.0.0
 *
 * @param {Array} array - The array to flatten.
 * @param {number} [depth=1] - The maximum recursion depth.
 * @returns {Array} - The new flattened array.
 *
 * @example
 *
 * flattenDepth([1, [2, [3, [4]], 5]], 2);
 * // => [1, 2, 3, [4], 5]
 */
const flattenDepth = <T>(array: T[], depth: number = 1): any[] =>
	array.flat(depth);

export default flattenDepth;
