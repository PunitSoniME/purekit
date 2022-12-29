import applyArrayFn from '../util/applyArrayFn';

const every = <T>(collection: T, iteratee: any): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'every',
		iteratee: iteratee,
	});
};

export default every;
