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

/**
 * Sorts the elements of an array based on the iteratees passed as arguments.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} collection - The array to iterate over.
 * @param {(string | Function | (string | Function)[])} [iteratees=[identity]] - The iteratees to sort the array.
 * @returns {T[]} - Returns the new sorted array.
 *
 * @example
 *
 * const users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 },
 * ];
 *
 * sortBy(users, [user => user.user, user => user.age]);
 * // => [{user: "barney", age: 34}, {user: "barney", age: 36}, {user: "fred", age: 40}, {user: "fred", age: 48}]
 *
 * sortBy(users, 'user');
 * // => [{user: "barney", age: 36}, {user: "barney", age: 34}, {user: "fred", age: 48}, {user: "fred", age: 40}]
 *
 * sortBy(users, user => user.age);
 * // => [{user: "barney", age: 34}, {user: "barney", age: 36}, {user: "fred", age: 40}, {user: "fred", age: 48}]
 */
const sortBy = <T>(
	collection: T[],
	iteratees: string | Function | (string | Function)[] = [identity]
): T[] => {
	if (!Array.isArray(iteratees)) iteratees = [iteratees];

	return [...collection].sort(baseSortBy(iteratees));
};

export default sortBy;
