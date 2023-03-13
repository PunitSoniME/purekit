import concat from './concat';

/**
 * Creates an array of unique values that are included in the first given array,
 * but not in any of the other given arrays, using a custom comparator function to determine uniqueness.
 *
 * @template T The type of elements in the arrays.
 * @param {T[]} array The array to inspect.
 * @param {...T[][]} args The arrays to exclude.
 * @param {function} comparator The function to determine the uniqueness of each element.
 * @returns {T[]} - Returns the new array of filtered values.
 *
 * @example
 *
 * const array1 = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
 * const array2 = [{ x: 1, y: 1 }, { x: 1, y: 2 }];
 * const result = xorWith(array1, array2, (a, b) => a.x === b.x && a.y === b.y);
 * console.log(result);
 * // => [{x: 2, y: 1}, {x: 1, y: 1}]
 */

const xorWith = <T>(array: T[], ...args: any): T[] => {
	let comparator = args.pop();

	const flatArray = concat(array, ...args);
	const mappedData = new Map();

	for (const elem of flatArray) {
		const savedRecord = [...mappedData.keys()].find(d => comparator(d, elem));

		if (savedRecord) {
			mappedData.set(savedRecord, mappedData.get(savedRecord) + 1);
		} else {
			mappedData.set(elem, 1);
		}
	}

	let difference: T[] = [];

	for (const [key, value] of mappedData) {
		if (value === 1) difference.push(key);
	}

	return difference;
};

export default xorWith;
