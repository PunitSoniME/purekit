import applyArrayFn from '../util/applyArrayFn';

const includes = <T>(
	collection: T,
	iteratee: any,
	fromIndex: number = 0
): Boolean => {
	if (typeof collection === 'object') {
		return Object.values(collection as any).includes(iteratee, fromIndex);
	}
	return applyArrayFn({
		collection: collection,
		fnName: 'includes',
		iteratee: iteratee,
		fromIndex: fromIndex,
		equalyCompare: false,
	});
};

export default includes;
