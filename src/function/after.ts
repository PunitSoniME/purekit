/**
 * Creates a function that invokes `fn` once it's called `times` times or more.
 * The last arguments provided to the debounced function will be used the next time the function is called.
 *
 * @since 1.0.0
 *
 * @param {number} times - The number of times `fn` must be called before it is executed.
 * @param {Function} fn - The function to be executed.
 * @returns {any} - Returns the new debounced function.
 *
 * @example
 *
 * function greet(name) {
 *   console.log('Hello, ' + name + '!');
 * }
 *
 * const greetAfterThree = after(3, greet);
 *
 * greetAfterThree('Alice'); // nothing happens
 * greetAfterThree('Bob');   // nothing happens
 * greetAfterThree('Cathy'); // logs 'Hello, Cathy!'
 */
const after = (times: number, fn: Function): any => {
	let counter = 0;
	times = times || 0;

	return (...args: any) => {
		counter++;

		if (counter >= times) {
			return fn(...args);
		}
	};
};

export default after;
