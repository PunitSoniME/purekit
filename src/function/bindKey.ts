/**
 * Creates a function that invokes the method at `object[method]` with `args` and the `this` binding of `object`.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to bind the `method` to.
 * @param {string} method - The name of the method to bind.
 * @param {...*} [args] - The arguments to be partially applied.
 * @returns {Function} - Returns the new bound function.
 *
 * @example
 *
 * const john = {
 *   name: 'John Doe',
 *   greet(greeting: string, punctuation: string) {
 *     return `${greeting} ${this.name}${punctuation}`;
 *   }
 * };
 *
 * const sayHelloToJohn = bindKey(john, 'greet', 'Hello');
 *
 * sayHelloToJohn('!'); // => 'Hello John Doe!'
 */
const bindKey =
	(object: any, method: any, ...args: any) =>
	(...bound: any) =>
		object[method](...args, ...bound);

export default bindKey;
