import pullAll from './pullAll';

/**
 * Removes all occurrences of specified values from an array.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to modify.
 * @param {...T} elementsToRemove - The values to remove.
 * @returns {T[]} - The modified array with values removed.
 *
 * @example
 * const arr = ['a', 'b', 'c', 'a', 'b', 'c'];
 * const result = pull(arr, 'a', 'c');
 * console.log(result); // Output: ['b', 'b']
 */
const pull = <T>(array: T[], ...elementsToRemove: T[]): T[] =>
	pullAll(array, elementsToRemove);
export default pull;
