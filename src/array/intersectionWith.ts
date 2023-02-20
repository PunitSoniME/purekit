import IIntersectionWith from './interface/IIntersectionWith';

/**
 * Returns an array containing all the elements that are present in all input arrays.
 * Uses a comparator function to determine equality between values.
 *
 * @param {Array} array - The input array.
 * @param {Array} args - Additional arrays to compare against.
 * @param {Function} comparator - A comparator function used to determine equality between values.
 * @returns {Array} - An array of values present in all input arrays.
 */
const intersectionWith: IIntersectionWith = <T>(
	array: T[],
	...args: any
): T[] => {
	let comparator = args.pop();

	return array.filter(item1 =>
		args.every((arr2: any) =>
			arr2.find((item2: any) => comparator(item1, item2))
		)
	);
};
export default intersectionWith;
