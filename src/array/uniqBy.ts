const uniqBy = <T>(collection: T[], iteratee: any): T[] => {
	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return collection.filter(
		(x, i, self) => i === self.findIndex(y => iteratee(x) === iteratee(y))
	);
};

export default uniqBy;
