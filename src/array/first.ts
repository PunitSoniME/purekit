import head from './head';

/**
 * Returns the first element of an array, or undefined if the array is empty.
 *
 * @since 1.0.0
 *
 * @param {T[]} array - The array to query.
 *
 * @returns {T | undefined} The first element of the array, or undefined if the array is empty.
 *
 * @example
 *
 * first([1, 2, 3]); // => 1
 *
 * first([]); // => undefined
 */
const first = head;
export default first;
