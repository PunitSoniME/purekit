import applyArrayFn from '../util/applyArrayFn';

const forEachRight = <T>(collection: T, iteratee: any): T => {
	applyArrayFn({
		collection: collection,
		fnName: 'forEach',
		iteratee: iteratee,
		makeItReverse: true,
	});
	return collection;
};

export default forEachRight;
