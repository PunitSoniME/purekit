/**
 * Creates a function that always returns the same value.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} arg - The value to return.
 *
 * @return {Function} - The new function.
 *
 * @example
 *
 * const func = constant('Hello');
 *
 * func();
 * // => 'Hello'
 *
 * func();
 * // => 'Hello'
 */
const constant =
	<T>(arg: T): any =>
	() =>
		arg;
export default constant;
