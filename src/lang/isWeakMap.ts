/**
 * Checks if a value is a WeakMap object.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a WeakMap, else `false`.
 *
 * @example
 *
 * isWeakMap(new WeakMap()); // true
 * isWeakMap(new Map()); // false
 */
const isWeakMap = (value: any): boolean => value instanceof WeakMap;
export default isWeakMap;
