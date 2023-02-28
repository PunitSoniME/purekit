/**
 * Checks if a value is a WeakSet.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a WeakSet, else `false`.
 *
 * @example
 *
 * isWeakSet(new WeakSet()); // => true
 * isWeakSet(new Set()); // => false
 * isWeakSet({}); // => false
 */

const isWeakSet = (value: any): boolean => value instanceof WeakSet;
export default isWeakSet;
