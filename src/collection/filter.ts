import applyArrayFn from '../helpers/applyArrayFn';

const filter = <T>(collection: T, iteratee: any): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'filter',
		iteratee: iteratee,
	});
};

export default filter;
