import applyArrayFn from '../util/applyArrayFn';

const findLast = <T>(
	collection: T,
	fn: any,
	fromIndex: number = Array.isArray(collection) ? collection.length - 1 : 0
): Boolean => {
	return applyArrayFn({
		collection: collection,
		fnName: 'findLast',
		fn: fn,
		fromIndex: 0,
		toIndex: fromIndex,
	});
};

export default findLast;
