/**
 * Creates a function that can be partially applied from the right.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to curry.
 *
 * @returns {Function} - Returns the new curried function.
 *
 * @example
 *
 * const greet = (greeting, name) => `${greeting} ${name}`;
 *
 * const greetGoodbye = curryRight(greet)('Goodbye');
 *
 * greetGoodbye('John');
 * // => 'Goodbye John'
 *
 * greetGoodbye('Sarah');
 * // => 'Goodbye Sarah'
 *
 * const greetGoodbyeJohn = curryRight(greet)('Goodbye', 'John');
 *
 * greetGoodbyeJohn();
 * // => 'Goodbye John'
 */
const curryRight = (func: Function) => {
	const expectedArgs = func.length;
	const curried = (...args: any) => {
		return args.length >= expectedArgs
			? func(...args)
			: (...args2: any) => curried(...args2.concat(args));
	};
	return curried;
};

export default curryRight;
