import applyArrayFn from '../util/applyArrayFn';

const findIndex = <T>(collection: T, predicate: any, fromIndex = 0): number => {
	return applyArrayFn({
		collection: collection,
		fnName: 'findIndex',
		fn: predicate,
		fromIndex: fromIndex,
	});
};

export default findIndex;
