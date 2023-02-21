/**
 * Creates a function that invokes `fn` with its arguments transformed.
 *
 * @since 1.0.0
 *
 * @param {Function} fn - The function to wrap.
 * @param {number} [arity=fn.length] - The arity of `fn`.
 * @returns {Function} Returns the new wrapped function.
 *
 * @example
 *
 * const parseIntAry = ary(parseInt, 1);
 *
 * ['6', '8', '10'].map(parseIntAry);
 * // => [6, 8, 10]
 */
const before = (times: number, fn: Function) => {
	let counter = 0;
	let res: any;

	return (...args: any) => {
		counter++;

		if (counter < times) {
			res = fn(...args);
			return res;
		} else {
			return res;
		}
	};
};

export default before;
