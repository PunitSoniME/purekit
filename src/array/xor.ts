import concat from './concat';

/**
 * Returns an array of unique values that are included only in one of the given arrays.
 * @template T
 * @param {T[]} array - The input array.
 * @param {...T[][]} restArray - The rest of the arrays to be compared.
 * @returns {T[]} - An array of unique values from the input arrays.
 *
 * @example
 * xor([2, 1], [2, 3]) // => [1, 3]
 * xor(['a', 'b', 'c'], ['b', 'd'], ['d', 'e']) // => ['a', 'c', 'e']
 */
const xor = <T>(array: T[], ...restArray: T[][]): T[] => {
	const flatArray = concat(array, ...restArray);
	const mappedData = new Map();

	for (const elem of flatArray) {
		mappedData.set(elem, mappedData.has(elem) ? mappedData.get(elem) + 1 : 1);
	}

	let difference: T[] = [];

	mappedData.forEach((value, key) => {
		if (value === 1) difference.push(key);
	});

	return difference;
};

export default xor;
