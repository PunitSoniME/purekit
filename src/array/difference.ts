/**
 * Returns an array of elements from the first array that are not present in the other arrays.
 *
 * @template T
 * @param {T[]} array - The array to inspect.
 * @param {...T[][]} restArray - The arrays of values to exclude.
 * @returns {T[]} - Returns the new array of filtered values.
 */

const difference = <T>(
	array: T[] | null | undefined,
	...restArray: T[][]
): T[] => {
	if (array === null || array === undefined) return [];

	const valuesToExclude = new Set(restArray.flat(Infinity));
	return array.filter(value => !valuesToExclude.has(value));
};

export default difference;
