/**
 * Creates an object from an array of key-value pairs.
 *
 * @template T
 * @param {T[][]} array - The array of key-value pairs.
 * @returns {Object} An object created from the key-value pairs.
 */
const fromPairs = <T>(array: T[][]): Object => Object.fromEntries(array);

export default fromPairs;
