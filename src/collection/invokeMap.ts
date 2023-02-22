import get from '../object/get';

/**
 * Invokes the method at `path` of each element in the `collection`.
 * Returns an array of the results of each invoked method.
 *
 * @since 1.0.0
 *
 * @param {Array|Object} collection - The collection to iterate over.
 * @param {Array|string|Function} path - The path of the method to invoke or a function that will be invoked for each element.
 * @param {...*} [args] - The arguments to invoke the method with.
 *
 * @returns {Array} - Returns the array of results.
 *
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred', 'age': 40 }
 * ];
 *
 * invokeMap(users, 'user'); // => ['barney', 'fred']
 *
 * invokeMap(users, (o) => o.user + ' is ' + o.age); // => ['barney is 36', 'fred is 40']
 *
 * invokeMap(users, ['user', 'age']); // => [['barney', 36], ['fred', 40]]
 */
const invokeMap = <T>(
	collection: T,
	path: Array<any> | Function | string,
	...args: any
) => {
	if (Array.isArray(collection)) {
		return (collection as T[]).map((data: any) => {
			if (data) {
				if (typeof path === 'function') {
					return (path as Function).apply(data, args);
				} else if (typeof path === 'string') {
					return typeof data[path] === 'function'
						? data[path](...args)
						: get(data, path);
				} else {
					return get(data, path);
				}
			}
			return undefined;
		});
	}

	if (collection && typeof collection === 'object') {
		return (Object.entries(collection as Object).map as any)(
			//	@ts-ignore
			([_, value]: any[]) => {
				if (value) {
					if (typeof path === 'function') {
						return (path as Function).apply(value, args);
					} else if (typeof path === 'string') {
						return typeof value[path] === 'function'
							? value[path](...args)
							: get(value, path);
					} else {
						return get(value, path);
					}
				}
				return undefined;
			}
		);
	}

	return [];
};

export default invokeMap;
