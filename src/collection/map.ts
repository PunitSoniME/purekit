import applyArrayFn from '../util/applyArrayFn';

/**
 * Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).
 * @param collection Array | Object
 * @param iteratee 
 * @returns An array
 */
const map = <T>(collection: T, iteratee: any): Boolean => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		iteratee: iteratee,
	});
};

export default map;
