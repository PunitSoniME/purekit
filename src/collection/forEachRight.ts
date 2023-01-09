import applyArrayFn from '../helpers/applyArrayFn';

const forEachRight = <T>(collection: T, iteratee: any): T => {
	applyArrayFn({
		collection: collection,
		fnName: 'forEach',
		iteratee: iteratee,
		checkFromEnd: true,
	});
	return collection;
};

export default forEachRight;
