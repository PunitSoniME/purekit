import IDifferenceWith from './interface/IDifferenceWith';

/**
 * Returns the difference between the first array and all other arguments using a provided comparator function
 *
 * @since 1.0.0
 *
 * @template T
 *
 * @param {T[]} array - The array to process
 * @param {...any[]} args - The arrays of values to exclude
 * @param {Function} comparator - The function invoked per element to compare values
 * @returns {T[]} - Returns a new array of filtered values
 *
 * @example
 *
 * const a = [1, 2, 3, 4];
 * const b = [3, 4];
 *
 * const result = differenceWith(a, b, (a, b) => a === b);
 *
 * console.log(result);	//	=>	[1, 2]
 */
const differenceWith: IDifferenceWith = <T>(array: T[], ...args: any): T[] => {
	let comparator = args.pop();
	const flatArray = args.flat(Infinity);
	return array.filter(c => !flatArray.some((s: any) => comparator(s, c)));
};
export default differenceWith;
