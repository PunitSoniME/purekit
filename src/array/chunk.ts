/**
 * Creates an array of elements split into groups the length of chunkSize.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The array to process.
 * @param {number} [chunkSize=1] - The length of each chunk.
 * @param {T[][]} [cache=[]] - The array to store the chunked elements.
 * @returns {T[][]} - The new array of chunks.
 *
 * @example
 *
 * chunk([1, 2, 3, 4, 5], 2);
 * // returns [[1, 2], [3, 4], [5]]
 *
 * chunk([1, 2, 3, 4, 5], 3);
 * // returns [[1, 2, 3], [4, 5]]
 *
 * chunk([1, 2, 3, 4, 5], 0);
 * // returns []
 */
const chunk = <T>(
	array: T[],
	chunkSize: number = 1,
	cache: T[][] = []
): T[][] => {
	const tmp = [...array];
	if (chunkSize <= 0) {
		return cache;
	}
	while (tmp.length) {
		cache.push(tmp.splice(0, chunkSize));
	}
	return cache;
};

export default chunk;
