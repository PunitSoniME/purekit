/**
 * Checks if a value is a Set.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a Set, else `false`.
 *
 * @example
 *
 * isSet(new Set()); // => true
 *
 * isSet(new WeakSet()); // => false
 *
 * isSet({ key: 'value' }); // => false
 */
const isSet = (value: any): boolean =>
	value instanceof Set || value.toString() === '[object Set]';
export default isSet;
