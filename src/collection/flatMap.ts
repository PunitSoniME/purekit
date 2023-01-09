import applyArrayFn from '../helpers/applyArrayFn';

const flatMap = <T>(collection: T, iteratee: any): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		iteratee: iteratee,
	}).flat();
};

export default flatMap;
