import identity from '../util/identity';

/**
 *
 * @param array One of the array to perform union operation on
 * @param predicate
 * @returns
 */
const unionBy = <T>(array: T[], ...predicate: any): T[] => {
	let iteratee = predicate.pop() ?? identity;
	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return array
		.concat(...predicate)
		.filter(
			(x, i, self) => i === self.findIndex(y => iteratee(x) === iteratee(y))
		);
};

export default unionBy;
