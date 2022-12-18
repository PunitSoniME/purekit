import applyArrayFn from '../util/applyArrayFn';

const includes = <T>(
	collection: T,
	fn: any,
	fromIndex: number = 0
): Boolean => {
	if (typeof collection === 'object') {
		return Object.values(collection as any).includes(fn, fromIndex);
	}
	return applyArrayFn({
		collection: collection,
		fnName: 'includes',
		fn: fn,
		fromIndex: fromIndex,
		equalyCompare: false,
	});
};

export default includes;
