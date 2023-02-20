/**
 * Creates an object from an array of key-value pairs.
 *
 * @since 1.0.0
 *
 * @param {T[][]} array - The array of key-value pairs to convert to an object.
 * @returns {Object} An object created from the key-value pairs in the input array.
 *
 * @example
 *
 * fromPairs([['a', 1], ['b', 2], ['c', 3]]); // {a: 1, b: 2, c: 3}
 */
const fromPairs = <T>(array: T[][]): Object => Object.fromEntries(array);

export default fromPairs;
