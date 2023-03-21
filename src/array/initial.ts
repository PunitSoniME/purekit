/**
 * Returns all the elements of an array except the last one.
 *
 * @since 1.0.0
 *
 * @param {Array} array - The array to query.
 * @returns {Array} - A new array with all elements except the last one.
 *
 * @example
 *
 * initial([1, 2, 3]); // => [1, 2]
 */
const initial = <T>(array: T[]): T[] => array.slice(0, -1);
export default initial;
