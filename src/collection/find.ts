import applyArrayFn from '../util/applyArrayFn';

const find = <T>(
	collection: T,
	iteratee: any,
	fromIndex: number = 0
): Boolean => {
	return applyArrayFn({
		collection: collection,
		fnName: 'find',
		iteratee: iteratee,
		fromIndex: fromIndex,
	});
};

export default find;
