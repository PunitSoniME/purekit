/**
 * Creates a new function that takes the same arguments as the original function,
 * but with the first and second arguments reversed.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to flip argument order for.
 * @returns {Function} - A new function with flipped argument order.
 *
 * @example
 *
 * function foo(a, b, c) {
 *   console.log(a, b, c);
 * }
 *
 * const flippedFoo = flip(foo);
 *
 * foo(1, 2, 3); // => 1, 2, 3
 * flippedFoo(1, 2, 3); // => 2, 1, 3
 */
const flip =
	(func: Function) =>
	(...args: any) =>
		func(...args.reverse());

export default flip;
