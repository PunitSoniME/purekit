import applyArrayFn from '../util/applyArrayFn';

const flatMapDepth = <T>(collection: T, fn: any, depth: number = 1): T[] => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		fn: fn,
	}).flat(depth);
};

export default flatMapDepth;
