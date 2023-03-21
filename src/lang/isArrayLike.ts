/**
 * Determines whether the given value is an array-like object.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is an array-like object, `false` otherwise.
 *
 * @example
 * isArrayLike('hello'); // => true
 * isArrayLike([1, 2, 3]); // => true
 * isArrayLike(document.querySelectorAll('.example')); // => true
 * isArrayLike({}); // => false
 * isArrayLike(null); // => false
 */
const isArrayLike = (value: any): boolean => {
	try {
		return value.length >= 0;
	} catch {
		return false;
	}
};
export default isArrayLike;
