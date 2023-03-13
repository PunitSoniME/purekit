/**
 * Returns the sum of all the numbers in the array.
 *
 * @since 1.0.0
 *
 * @param {number[]} numbers - The array of numbers to sum.
 *
 * @returns {number} - The sum of all the numbers in the array.
 *
 * @example
 *
 * // returns 15
 * sum([1, 2, 3, 4, 5]);
 *
 * // returns -2
 * sum([-1, -2, 0, 1]);
 */
const sum = (numbers: number[]): number =>
	numbers.reduce((acc, num) => {
		acc += num;
		return acc;
	}, 0);

export default sum;
