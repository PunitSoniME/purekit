/**
 * Creates a function that invokes `func` with arguments rearranged according to
 * the specified `order`.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to rearrange arguments for.
 * @param {Array} order - The specified order of argument positions.
 *
 * @returns {Function} The new function with rearranged arguments.
 *
 * @example
 * const originalFn = (a, b, c) => [a, b, c];
 * const reargFn = rearg(originalFn, [2, 0, 1]);
 *
 * originalFn(1, 2, 3); // [1, 2, 3]
 * reargFn(1, 2, 3); // [3, 1, 2]
 */

const rearg =
	(func: Function, order: any) =>
	(...args: any) => {
		const reargs = order.map((idx: any) => args[idx]);
		return func(...reargs);
	};

export default rearg;
