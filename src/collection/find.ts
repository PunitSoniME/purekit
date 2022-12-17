import applyArrayFn from '../util/applyArrayFn';

const find = <T>(collection: T, fn: any, fromIndex: number = 0): Boolean => {
	return applyArrayFn({
		collection: collection,
		fnName: 'find',
		fn: fn,
		fromIndex: fromIndex,
	});
};

export default find;
