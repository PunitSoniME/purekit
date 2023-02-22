/**
 * Creates a new function that, when called, has its `this` keyword set to the provided context, with a given sequence of arguments preceding any provided when the new function was called.
 *
 * @since 1.0.0
 *
 * @param {Function} fn - The function to bind `this` to the provided context.
 * @param {Object} ctx - The context to bind `this` to.
 * @param  {...any} boundArgs - The sequence of arguments to be bound to the new function.
 * @returns {Function} The new function with the bound `this` keyword and arguments.
 *
 * @example
 *
 * const user = {
 *   name: 'Alice',
 *   sayHi(greeting) {
 *     console.log(`${greeting}, my name is ${this.name}.`);
 *   }
 * };
 *
 * const sayHiToAlice = bind(user.sayHi, user, 'Hello');
 *
 * sayHiToAlice(); // logs "Hello, my name is Alice."
 *
 * const add = (x, y) => x + y;
 * const addTen = bind(add, null, 10);
 *
 * console.log(addTen(5)); // logs 15
 */
const bind = (fn: Function, ctx: any, ...boundArgs: any) =>
	fn.bind(ctx, ...boundArgs);

export default bind;
