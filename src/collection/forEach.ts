import applyArrayFn from '../util/applyArrayFn';

const forEach = <T>(collection: T, iteratee: any): T => {
	applyArrayFn({
		collection: collection,
		fnName: 'forEach',
		iteratee: iteratee,
	});
	return collection;
};

export default forEach;
