//	@ts-nocheck

import applyArrayFn from '../helpers/applyArrayFn';

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
	// if (typeof path === 'string')
	// 	return applyArrayFn({
	// 		collection: collection,
	// 		fnName: path,
	// 		iteratee: iteratee,
	// 	})
	return [];
};

export default invokeMap;
