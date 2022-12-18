import applyArrayFn from '../util/applyArrayFn';

const flatMap = <T>(collection: T, fn: any): T[] => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		fn: fn,
	}).flat();
};

export default flatMap;
