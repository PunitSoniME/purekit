/**
 * Creates a function that returns the result of calling the given functions in sequence, where each function consumes the return value of the function that follows it.
 *
 * @since 1.0.0
 *
 * @param {Function | Function[]} funcs - The functions to compose.
 *
 * @return {Function} Returns the new composite function.
 *
 * @example
 *
 * const square = x => x * x;
 * const double = x => x * 2;
 *
 * const func = flowRight(square, double);
 *
 * // returns 18
 * func(3);
 *
 * // returns 16
 * flowRight(square, double, square)(2);
 */
const flowRight =
	(funcs: Function | Function[]): Function =>
	(...args: any) =>
		(funcs as Function[])
			.reverse()
			.reduce((prev, fnc) => [fnc(...prev)], args)[0];
export default flowRight;
