/**
 * Executes a function a specified number of times and returns the result of the last execution.
 *
 * @since 1.0.0
 *
 * @param {number} times - The number of times to execute the function.
 * @param {Function} fn - The function to be executed.
 *
 * @returns {Function} - A function that executes the input function the specified number of times.
 *
 * @example
 *
 * Define a function to be executed 3 times:
 * const multiplyByTwo = (x) => x * 2;
 * const executeThreeTimes = before(3, multiplyByTwo);
 *
 * // Call the function multiple times:
 * executeThreeTimes(3); // => 6
 * executeThreeTimes(5); // => 6
 * executeThreeTimes(2); // => 6
 */
const before = (times: number, fn: Function): Function => {
	let counter = 0;
	let res: any;

	return (...args: any) => {
		counter++;

		if (counter < times) {
			res = fn(...args);
			return res;
		} else {
			return res;
		}
	};
};

export default before;
