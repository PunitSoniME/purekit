/**
 * Creates a new array with all duplicate values removed. Assumes the input array is already sorted.
 *
 * @template T
 * @param {T[]} array The input array to remove duplicates from.
 * @returns {T[]} Returns the new array of unique values.
 *
 * @example
 *
 * sortedUniq([1, 1, 2, 2, 3, 4, 4, 5]); // Returns: [1, 2, 3, 4, 5]
 */
const sortedUniq = <T>(array: T[]): T[] => Array.from(new Set([...array]));
export default sortedUniq;
