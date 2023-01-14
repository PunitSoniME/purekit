import IDifferenceWith from './interface/IDifferenceWith';

/**
 *
 * @param array
 * @param iteratee
 * @returns
 */
const differenceWith: IDifferenceWith = <T>(
	array: T[],
	...iteratee: any
): T[] => {
	let comparator = iteratee.pop();
	const flatArray = iteratee.flat(Infinity);
	return array.filter(c => !flatArray.some((s: any) => comparator(s, c)));
};
export default differenceWith;
