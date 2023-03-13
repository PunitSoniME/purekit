/**
 * Returns the first element of an array, or undefined if the array is empty.
 *
 * @since 1.0.0
 *
 * @param {T[]} array - The array to query.
 *
 * @returns {T | undefined} - The first element of the array, or undefined if the array is empty.
 *
 * @example
 *
 * head([1, 2, 3]); // => 1
 *
 * head([]); // => undefined
 */
const head = <T>(array: T[]): T | undefined => array[0];
export default head;
