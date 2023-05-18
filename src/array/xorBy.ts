import createPredicate from '../helpers/createPredicate';
import identity from '../util/identity';
import concat from './concat';

/**
 * Creates an array of unique values that are included in exactly one of the given arrays
 *
 * @template T
 * @param {T[]} array - The array to inspect.
 * @param {...any} args - The arrays to inspect.
 * @param {Function} [iteratee=identity] - The iteratee invoked per element.
 * @returns {T[]} - Returns the new array of filtered values.
 *
 * @example
 *
 * const arr1 = [1, 2, 3, 4];
 * const arr2 = [2, 4, 6];
 * const arr3 = [1, 2, 5];
 *
 * const result = xorBy(arr1, arr2, arr3, (n) => n % 2);
 * console.log(result);
 * // => [3, 6]
 */
const xorBy = <T>(array: T[], ...args: any): T[] => {
	let iteratee = args.length > 1 ? args.pop() : identity;
	const fn = createPredicate(iteratee);

	const flatArray = concat(array, ...args);
	const mappedData = new Map();

	for (const elem of flatArray) {
		const modifiedData = (fn as any)(elem);
		mappedData.set(
			modifiedData,
			mappedData.has(modifiedData)
				? [...mappedData.get(modifiedData), elem]
				: [elem]
		);
	}

	let difference: T[] = [];

	mappedData.forEach(value => {
		if (value.length === 1) difference.push(value[0]);
	});

	return difference;
};

export default xorBy;
