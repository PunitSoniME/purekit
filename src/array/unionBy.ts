import identity from '../util/identity';

/**
 *
 * @param array One of the array to perform union operation on
 * @param args
 * @returns
 */
const unionBy = <T>(array: T[], ...args: any): T[] => {
	let iteratee = args.pop() ?? identity;
	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return array
		.concat(...args)
		.filter(
			(x, i, self) => i === self.findIndex(y => iteratee(x) === iteratee(y))
		);
};

export default unionBy;
