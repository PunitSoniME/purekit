/**
 * Calculates the average of a given array of numbers.
 *
 * @since 1.0.3
 *
 * @param {...number[]} nums - The numbers to calculate the average from.
 * @returns {number | string} - The average of the numbers. Returns 'NaN' if the array is empty.
 *
 * @example
 * average(...[1, 2, 3]);
 * // => 2
 *
 * average(1, 2, 3);
 * // => 2
 *
 * average(4, 6, 2, 8);
 * // => 5
 *
 * average();
 * // => 'NaN'
 */
const average = (...nums: number[]): number | string =>
	nums.reduce((acc, val) => acc + val, 0) / nums.length;
export default average;
