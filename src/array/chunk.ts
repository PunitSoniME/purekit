/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 * @param array The array to process.
 * @param chunkSize The length of each chunk
 * @param cache
 * @returns Returns the new array of chunks.
 */
const chunk = <T>(
	array: T[],
	chunkSize: number = 1,
	cache: any = []
): T[][] => {
	const tmp = [...array];
	if (chunkSize <= 0) return cache;
	while (tmp.length) cache.push(tmp.splice(0, chunkSize));
	return cache;

	// return Array(Math.ceil(collection.length / chunkSize))
	// 	.fill(null)
	// 	.map((_, index) => index * chunkSize)
	// 	.map(begin => collection.slice(begin, begin + chunkSize));
};

export default chunk;
