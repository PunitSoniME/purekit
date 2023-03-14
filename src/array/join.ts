/**
 * Joins all elements of an array into a string separated by the specified separator.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to join.
 * @param {string} [joiner=','] - The separator to use when joining the elements.
 * @returns {string} - The string created by joining the array elements.
 *
 * @example
 *
 * join([1, 2, 3], '-'); // returns '1-2-3'
 * join(['a', 'b', 'c'], ''); // returns 'abc'
 */
const join = <T>(array: T[], joiner: string = ','): string =>
	array.join(joiner);
export default join;
