/**
 * Creates a new array with unique elements from the original array.
 *
 * @template T
 * @param {T[]} array - The array to inspect.
 * @returns {T[]} Returns the new array of unique elements.
 *
 * @example
 * uniq([2, 1, 2]) // returns [2, 1]
 */
const uniq = <T>(array: T[]): T[] => Array.from(new Set(array));
export default uniq;
