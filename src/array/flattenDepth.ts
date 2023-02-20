/**
 * Flattens `array` up to `depth` times.
 *
 * @param {Array} array - The array to flatten.
 * @param {number} [depth=1] - The maximum recursion depth.
 * @returns {Array} - Returns the new flattened array.
 */
const flattenDepth = <T>(array: T[], depth: number = 1): any[] =>
	array.flat(depth);

export default flattenDepth;
