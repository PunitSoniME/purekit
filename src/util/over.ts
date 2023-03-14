/**
 * Creates a function that invokes each function in `array` with the
 * arguments it receives and returns an array of the results.
 *
 * @since 1.0.0
 *
 * @param {Array} array - The array of functions to iterate over.
 * @returns {Function} - Returns the new function.
 *
 * @example
 *
 * const func1 = x => x * 2;
 * const func2 = x => x + 2;
 * const func3 = x => x - 2;
 *
 * const funcs = [func1, func2, func3];
 * const overFunc = over(funcs);
 *
 * console.log(overFunc(5)); // [10, 7, 3]
 */
const over =
	(array: any[]): Function =>
	(...args: any) =>
		array.map(func => func(...args));
export default over;
