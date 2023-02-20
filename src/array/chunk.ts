/**
 * Creates an array of elements split into groups the length of `chunkSize`. If `array` can't be split evenly, the final chunk will be the remaining elements.
 *
 * @template T The type of the elements in the array.
 * @param {T[]} array The array to process.
 * @param {number} [chunkSize=1] The size of each chunk.
 * @param {T[][]} [cache=[]] An array to store the resulting chunks.
 * @returns {T[][]} Returns the new array of chunks.
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
