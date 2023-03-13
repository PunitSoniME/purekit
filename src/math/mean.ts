/**
 * Calculates the mean of an array of numbers.
 *
 * @since 1.0.0
 *
 * @param {number[]} collection - The array of numbers to calculate the mean for.
 * @returns {number} - The mean value of the array.
 *
 * @example
 *
 * // returns 2
 * mean([1, 2, 3]);
 *
 * // returns 5
 * mean([5, 5, 5, 5]);
 */
const mean = (collection: number[]): number => {
	return collection.reduce((acc, num) => acc + num, 0) / collection.length;
};

export default mean;
