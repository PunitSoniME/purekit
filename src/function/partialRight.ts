/**
 * Creates a new function that invokes the given function with the `cachedArgs`
 * and the additional arguments provided when the new function is called.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to partially apply arguments to.
 * @param {...any} cachedArgs - The arguments to be partially applied to `func`.
 * @returns {Function} - Returns the new partially applied function.
 *
 * @example
 *
 * function greet(greeting, name) {
 *   return `${greeting}, ${name}!`;
 * }
 *
 * const sayHelloTo = partialRight(greet, 'Hello');
 *
 * console.log(sayHelloTo('John'));
 * // => 'Hello, John!'
 */

const partialRight =
	(func: Function, ...cachedArgs: any) =>
	(...args: any) =>
		func(...args, ...cachedArgs);

export default partialRight;
