/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 * @param collection The array to process.
 * @param chunkSize The length of each chunk
 * @returns Returns the new array of chunks.
 */
const chunk = <T>(collection: T[], chunkSize: number = 1): T[][] => {
	return Array(Math.ceil(collection.length / chunkSize))
		.fill(null)
		.map((_, index) => index * chunkSize)
		.map(begin => collection.slice(begin, begin + chunkSize));
};

export default chunk;
