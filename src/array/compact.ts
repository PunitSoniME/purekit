/**
 * Creates an array with all falsey values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @template T The type of the elements in the array.
 * @param {T[]} array The array to process.
 * @returns {T[]} Returns the new array of filtered values.
 */
const compact = <T>(array: T[]): T[] => array.filter(x => !!x);
export default compact;
