/**
 * Creates an array of elements split into groups the length of chunkSize.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to process.
 * @param {number} [chunkSize=1] - The length of each chunk.
 * @returns {T[][]} - The new array of chunks.
 *
 * @example
 *
 * chunk([1, 2, 3, 4, 5], 2);
 * // => [[1, 2], [3, 4], [5]]
 *
 * chunk([1, 2, 3, 4, 5], 3);
 * // => [[1, 2, 3], [4, 5]]
 *
 * chunk([1, 2, 3, 4, 5], 0);
 * // => []
 */
const chunk = <T>(array: T[], chunkSize: number = 1): T[][] => {
	return Array(Math.ceil(array.length / chunkSize))
		.fill(undefined)
		.map((_, index) => index * chunkSize)
		.map(begin => array.slice(begin, begin + chunkSize));
};

export default chunk;
