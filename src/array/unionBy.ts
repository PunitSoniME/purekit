/**
 *
 * @param collection One of the collection to perform union operation on
 * @param predicate
 * @returns
 */
const unionBy = <T>(collection: T[], ...predicate: any): T[] => {
	let iteratee = predicate.pop();
	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return collection
		.concat(...predicate)
		.filter(
			(x, i, self) => i === self.findIndex(y => iteratee(x) === iteratee(y))
		);
};

export default unionBy;
