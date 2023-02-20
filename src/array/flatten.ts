/**
 * Flattens a nested array into a single-level array.
 *
 * @template T
 * @param {T[]} array - The array to flatten.
 * @returns {any[]} - The flattened array.
 */
const flatten = <T>(array: T[]): any[] => array.flat();
export default flatten;
