import applyArrayFn from '../util/applyArrayFn';

const forEachRight = <T>(collection: T, fn: any): T => {
	applyArrayFn({
		collection: collection,
		fnName: 'forEach',
		fn: fn,
		makeItReverse: true,
	});
	return collection;
};

export default forEachRight;
