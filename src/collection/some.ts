import applyArrayFn from '../helpers/applyArrayFn';

const some = <T>(collection: T, iteratee: any): boolean => {
	return applyArrayFn({
		collection: collection,
		fnName: 'some',
		iteratee: iteratee,
	});
};

export default some;
