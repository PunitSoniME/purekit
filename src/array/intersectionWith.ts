import IIntersectionWith from './interface/IIntersectionWith';

/**
 *
 * @param arrays
 * @param args
 * @returns
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
