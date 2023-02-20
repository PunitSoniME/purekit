/**
 * Flattens an array of nested arrays into a single flat array.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to flatten.
 * @returns {any[]} Returns the new flattened array.
 *
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]]); // Returns: [1, 2, 3, 4, 5]
 * flatten(['a', ['b', ['c']]]); // Returns: ['a', 'b', 'c']
 */
const flatten = <T>(array: T[]): any[] => array.flat();
export default flatten;
