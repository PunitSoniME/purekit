/**
 * Creates a partial function that is bound to the specified arguments.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to partially apply arguments to.
 * @param {...any} args - The arguments to partially apply to the function.
 * @returns {Function} - Returns the new partially applied function.
 *
 * @example
 * const add = (x, y, z) => x + y + z;
 * const add5 = partial(add, 2, 3);
 * add5(4); // returns 9
 */
const partial =
	(func: Function, ...args: any) =>
	(...furtherArgs: any) =>
		func(...args, ...furtherArgs);

export default partial;
