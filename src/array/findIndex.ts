import applyArrayFn from '../helpers/applyArrayFn';

const findIndex = <T>(collection: T, predicate: any, fromIndex = 0): number => {
	return applyArrayFn({
		collection: collection,
		fnName: 'findIndex',
		iteratee: predicate,
		fromIndex: fromIndex,
	});
};

export default findIndex;
