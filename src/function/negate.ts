/**
 * Returns a function that negates the result of the given function.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to negate.
 * @returns {Function} - A new function that returns the opposite boolean value of `func`.
 *
 * @example
 *
 * function isEven(num) {
 *   return num % 2 === 0;
 * }
 *
 * const isOdd = negate(isEven);
 *
 * isEven(2); // => true
 * isOdd(2);  // => false
 * isEven(3); // => false
 * isOdd(3);  // => true
 */
const negate =
	(func: Function) =>
	(...args: any) =>
		!func(...args);

export default negate;
