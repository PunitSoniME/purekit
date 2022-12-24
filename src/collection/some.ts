import applyArrayFn from '../util/applyArrayFn';

const some = <T>(collection: T, iteratee: any): Boolean => {
	return applyArrayFn({
		collection: collection,
		fnName: 'some',
		iteratee: iteratee,
	});
};

export default some;
