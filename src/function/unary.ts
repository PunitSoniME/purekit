/**
 * Returns a function that accepts only one argument and passes it to the original function.
 *
 * @since 1.0.0
 *
 * @param {Function} fn - The function to wrap.
 * @returns {Function} - A new function that accepts only one argument.
 *
 * @example
 *
 * const double = (x, y) => x * y;
 * const doubleUnary = unary(double);
 *
 * console.log(doubleUnary(2, 3)); // Output: 2
 * console.log(doubleUnary(5, 5)); // Output: 5
 */
const unary =
	<T>(fn: Function): Function =>
	(arg: T) =>
		fn(arg);

export default unary;
