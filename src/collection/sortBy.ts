import identity from '../util/identity';

function sortByAsc(key: Function | string, cb: any) {
	if (!cb) cb = () => 0;
	if (typeof key === 'function') {
		return (a: any, b: any) =>
			key(a) > key(b) ? 1 : key(b) > key(a) ? -1 : cb(a, b);
	}
	return (a: any, b: any) =>
		a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : cb(a, b);
}

// function sortByDesc(key, cb) {
// 	if (!cb) cb = () => 0;
// 	return (b, a) => (a[key] > b[key]) ? 1 :
// 		((b[key] > a[key]) ? -1 : cb(b, a));
// }

const baseSortBy = (keys: any[]) => {
	let cb: any = () => 0;
	keys.reverse();
	// orders.reverse();
	//	@ts-ignore
	for (const [_, key] of keys.entries()) {
		// const order = orders[i];
		// if (order == 'asc')
		cb = sortByAsc(key, cb);
		// else if (order == 'desc')
		// 	cb = sortByDesc(key, cb);
		// else
		// 	throw new Error(`Unsupported order "${order}"`);
	}
	return cb;
};

const sortBy = <T>(
	collection: T[],
	iteratees: string | Function | (string | Function)[] = [identity]
): T[] => {
	if (!Array.isArray(iteratees)) iteratees = [iteratees];

	return [...collection].sort(baseSortBy(iteratees));
};

export default sortBy;
