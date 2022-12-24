/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 * @param collection The array to compact.
 * @returns Returns the new array of filtered values.
 */
const compact = <T>(collection: T[]): T[] => {
	return collection.filter(Boolean);
};

export default compact;
