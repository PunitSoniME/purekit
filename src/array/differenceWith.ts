import IDifferenceWith from './interface/IDifferenceWith';

/**
 *
 * @param array
 * @param args
 * @returns
 */
const differenceWith: IDifferenceWith = <T>(array: T[], ...args: any): T[] => {
	let comparator = args.pop();
	const flatArray = args.flat(Infinity);
	return array.filter(c => !flatArray.some((s: any) => comparator(s, c)));
};
export default differenceWith;
