import applyArrayFn from '../helpers/applyArrayFn';

const reduce = <T>(collection: T, iteratee: any, initialValue: any): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'reduce',
		iteratee: iteratee,
		initialValue: initialValue,
	});
};

export default reduce;
