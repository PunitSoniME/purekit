/**
 * Creates a function that returns the result of calling the given functions in sequence, where each function consumes the return value of the function that precedes it.
 *
 * @since 1.0.0
 *
 * @param {Function | Function[]} funcs - The functions to compose.
 *
 * @return {Function} - Returns the new composite function.
 *
 * @example
 *
 * const square = x => x * x;
 * const double = x => x * 2;
 *
 * const func = flow(square, double);
 *
 * func(3);
 * // => 18
 *
 * flow(square, double, square)(2);
 * // => 32
 */
const flow =
	(funcs: Function | Function[]): Function =>
	(...args: any) =>
		(funcs as Function[]).reduce((prev, fnc) => [fnc(...prev)], args)[0];
export default flow;
