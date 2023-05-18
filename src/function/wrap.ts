/**
 * Creates a new function that calls `func` with `value` as the first argument
 * and passes any additional arguments to `func` after that.
 *
 * @since 1.0.0
 *
 * @param {any} value - The value to pass as the first argument to `func`.
 * @param {Function} func - The function to wrap.
 * @returns {Function} - A new function that wraps `func`.
 *
 * @example
 * const greet = name => `Hello, ${name}!`;
 * const greetBob = wrap('Bob', greet);
 *
 * console.log(greetBob());
 * // => "Hello, Bob!"
 *
 * console.log(greetBob('Alice'));
 * // => "Hello, Bob!"
 */

const wrap =
	(value: any, func: Function): Function =>
	(...args: any) =>
		func(value, ...args);

export default wrap;
