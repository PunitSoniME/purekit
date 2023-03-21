/**
 * Checks if `value` is object-like.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is object-like, else `false`.
 *
 * @example
 *
 * isObjectLike({}); // => true
 *
 * isObjectLike([1, 2, 3]); // => true
 *
 * isObjectLike(Function); // => false
 *
 * isObjectLike(null); // => false
 */

const isObjectLike = (value: any): boolean =>
	value !== null && typeof value === 'object';
export default isObjectLike;
