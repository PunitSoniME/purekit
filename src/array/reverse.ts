/**
 * Reverses an array in place.
 *
 * @since 1.0.0
 * 
 * @template T
 * @param {T[]} array - The input array.
 * @returns {T[]} - The reversed array.
 *
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * reverse(arr); // [5, 4, 3, 2, 1]
 */
const reverse = <T>(array: T[]): T[] => array.reverse();
export default reverse;
