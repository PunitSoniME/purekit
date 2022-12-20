import applyArrayFn from '../util/applyArrayFn';

const filter = <T>(collection: T, iteratee: any): Boolean => {
	return applyArrayFn({
		collection: collection,
		fnName: 'filter',
		iteratee: iteratee,
	});
};

export default filter;
