import isNil from './isNil';

/**
 * Checks if a given value is an object.
 *
 * @since 1.0.0
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is an object, else `false`.
 *
 * @example
 *
 * isObject({}); // => true
 * isObject(null); // => false
 * isObject(42); // => false
 */

const isObject = (value: any): boolean =>
	!isNil(value) && value instanceof Object;
export default isObject;
