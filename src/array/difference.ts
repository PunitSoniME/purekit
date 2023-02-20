/**
 * Creates an array of unique values that are included in the first given array and not included in the rest of the given arrays.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[] | null | undefined} array - The array to inspect.
 * @param {...T[][]} restArray - The arrays to exclude values.
 * @returns {T[]} - The new array of filtered values.
 *
 * @example
 *
 * difference([2, 1], [2, 3]); // -> [1]
 * difference([1, 2, 3], [2, 3, 4], [3, 4, 5]); // -> [1]
 * difference([1, 2, 3], [4, 5, 6]); // -> [1, 2, 3]
 * difference([], [1, 2, 3]); // -> []
 * difference(null, [1, 2, 3]); // -> []
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
