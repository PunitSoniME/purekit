import applyArrayFn from '../util/applyArrayFn';

const findLast = <T>(
	collection: T,
	iteratee: any,
	fromIndex: number = Array.isArray(collection) ? collection.length - 1 : 0
): Boolean => {
	return applyArrayFn({
		collection: collection,
		fnName: 'findLast',
		iteratee: iteratee,
		fromIndex: 0,
		toIndex: fromIndex,
	});
};

export default findLast;
