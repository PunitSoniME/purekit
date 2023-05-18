/**
 * Creates a function that applies the provided functions to the arguments of the created function.
 * The created function transforms the arguments by the corresponding transform function.
 *
 * @since 1.0.0
 *
 * @param {Function} fn - The function to apply the transforms to.
 * @param {Function[]} transforms - The transform functions to apply to the arguments of the function.
 *
 * @returns {Function} - Returns the new function.
 *
 * @example
 *
 * const double = (n) => n * 2;
 * const square = (n) => n * n;
 * const add = (a, b) => a + b;
 *
 * const addDoubleSquare = overArgs(add, [double, square]);
 *
 * console.log(addDoubleSquare(2, 3));
 * // => 13 // ((2 * 2) + (3 * 3 * 2))
 */
const overArgs =
	(fn: Function, transforms: any): Function =>
	(...args: any) => {
		const mappedArgs = args.map((arg: any, i: number) =>
			transforms[i] ? transforms[i](arg) : arg
		);
		return fn(...mappedArgs);
	};

export default overArgs;
