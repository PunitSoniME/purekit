import get from '../object/get';

/**
 *
 * @param collection
 * @param path
 * @param args
 * @returns
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
