/**
 * Passes the given value to a function and returns the result.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to pass to the function.
 * @param {Function} fn - The function to apply to the value.
 *
 * @returns {*} - The result of applying the function to the value.
 *
 * @example
 * const result = thru([1, 2, 3], (arr) => arr.map((x) => x * 2)).filter((x) => x > 3);
 * console.log(result);
 * // => [4, 6]
 */
const thru = (value: any, fn: Function): any => {
	return fn(value);
};

export default thru;
