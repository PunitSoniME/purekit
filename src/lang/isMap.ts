/**
 * Checks if a value is a Map object.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns true if value is a Map object, else false.
 *
 * @example
 *
 * isMap(new Map()); // true
 * isMap(new Set()); // false
 * isMap({}); // false
 */
const isMap = (value: any): boolean =>
	value instanceof Map && value.toString() === '[object Map]';
export default isMap;
