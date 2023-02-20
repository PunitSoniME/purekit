/**
 * Returns a new array with all elements of the input array except for the last one.
 *
 * @template T
 * @param {T[]} array - The input array.
 * @returns {T[]} A new array with all elements of the input array except for the last one.
 */
const initial = <T>(array: T[]): T[] => array.slice(0, -1);
export default initial;
