/**
 * Creates a function that accepts up to a certain number of arguments,
 * ignoring any additional arguments passed beyond that point.
 *
 * @since 1.0.0
 *
 * @param {Function} fn - The function to wrap.
 * @param {number} [arity=fn.length] - The maximum number of arguments to accept.
 *
 * @returns {Function} - Returns the new function.
 *
 * @example
 *
 * const add = (a, b, c) => a + b + c;
 * const addTwo = ary(add, 2);
 *
 * addTwo(1, 2, 3); // => 3
 * addTwo(1, 2); // => 3
 */
const ary =
	(fn: Function, arity: number = fn.length) =>
	(...args: any) =>
		fn(...args.slice(0, arity));

export default ary;
