import IDifferenceWith from './interface/IDifferenceWith';

/**
 * Creates an array of `array` values not included in the other given arrays using a comparator function.
 *
 * @template T The type of the elements of `array`.
 *
 * @param {T[]} array The array to inspect.
 * @param {...T[][]} restArray The values to exclude.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {T[]} Returns the new array of filtered values.
 */
const differenceWith: IDifferenceWith = <T>(array: T[], ...args: any): T[] => {
	let comparator = args.pop();
	const flatArray = args.flat(Infinity);
	return array.filter(c => !flatArray.some((s: any) => comparator(s, c)));
};
export default differenceWith;
