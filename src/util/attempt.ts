/**
 * Attempts to invoke a function with the given arguments and returns either the result or the error object.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to invoke.
 * @param {...*} args - The arguments to pass to the function.
 *
 * @return {*} The result of the function or the error object.
 *
 * @example
 *
 * // returns 6
 * attempt((a, b) => a + b, 2, 4);
 *
 * // returns TypeError: Cannot read property 'length' of null
 * attempt(str => str.length, null);
 */
const attempt = (func: Function, ...args: any): any => {
	try {
		return func(...args);
	} catch (e) {
		return e;
	}
};
export default attempt;
