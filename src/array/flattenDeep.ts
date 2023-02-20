/**
 * Flattens an array recursively to a depth of 1.
 *
 * @template T
 * @param {T[]} array - The array to flatten.
 * @returns {any[]} - The flattened array.
 */
const flattenDeep = <T>(array: T[]): any[] => array.flat(Infinity);
export default flattenDeep;
