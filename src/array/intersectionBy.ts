/**
 *
 * @param collection
 * @param args
 * @returns
 */
const intersectionBy = <T>(collection: T, ...args: any): T[] => {
	let iteratee = args.pop();

	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return (collection as T[]).filter(item1 =>
		args.every((arr2: any) =>
			arr2.find((item2: any) => iteratee(item1) === iteratee(item2))
		)
	);
};

export default intersectionBy;
