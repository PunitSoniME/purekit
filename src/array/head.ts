/**
 * Gets the first element of an array.
 *
 * @template T
 * @param {T[]} array - The array to query.
 * @returns {T | undefined} - Returns the first element of the array, or `undefined` if the array is empty.
 */

const head = <T>(array: T[]): T | undefined => array[0];
export default head;
