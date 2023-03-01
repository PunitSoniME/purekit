/**
 * Returns the maximum number in the given collection.
 *
 * @since 1.0.0
 *
 * @param collection - The collection of numbers to find the maximum from.
 * @returns The maximum number in the collection or undefined if the collection is empty.
 *
 * @example
 * max([1, 3, 2]); // returns 3
 */
const max = (collection: number[]): number | undefined => {
	return collection.length === 0 ? undefined : Math.max(...collection);
};

export default max;
