/**
 * Creates a function that invokes the provided function with all but the first argument of the passed arguments.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to partially apply arguments to.
 * @returns {Function} - Returns the new partially applied function.
 *
 * @example
 *
 * const logRest = rest(console.log);
 * logRest(1, 2, 3); // Output: 1, 2, 3
 * logRest(1); // Output: 1
 */
const rest =
	(func: Function) =>
	(first: any, ...args: any) =>
		func(first, args);

export default rest;
