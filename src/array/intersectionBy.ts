import identity from '../util/identity';

/**
 * Returns an array containing the elements that are present in all of the input arrays,
 * using a specified iteratee function to determine the comparison key for each element.
 *
 * @template T
 * @param {T[]} array - The input array.
 * @param {...any} args - The other input arrays and the iteratee function.
 * @returns {T[]} An array containing the elements that are present in all of the input arrays.
 */
const intersectionBy = <T>(array: T[], ...args: any[]): T[] => {
	let iteratee = args ? args.pop() : [identity];

	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return array.filter(item1 =>
		args.every((arr2: any) =>
			arr2.find((item2: any) => iteratee(item1) === iteratee(item2))
		)
	);
};

export default intersectionBy;
