/**
 * Returns a function which will return the nth argument passed to it
 *
 * @since 1.0.0
 *
 * @param {number} idx - The index of the argument to be returned
 *
 * @returns {Function} - A function which will return the nth argument passed to it
 *
 * @example
 * const getSecondArg = nthArg(1);
 * getSecondArg(1, 2, 3); // Returns 2
 *
 * const getThirdArg = nthArg(2);
 * getThirdArg('a', 'b', 'c', 'd'); // Returns 'c'
 */
const nthArg =
	(idx: number = 0): Function =>
	(...args: any) =>
		args.slice(idx, idx + 1)[0];
export default nthArg;
