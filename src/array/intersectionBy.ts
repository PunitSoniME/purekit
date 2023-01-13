import identity from '../util/identity';

/**
 *
 * @param array
 * @param args
 * @returns
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
