import applyArrayFn from '../util/applyArrayFn';

const flatMapDeep = <T>(collection: T, fn: any): T[] => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		fn: fn,
	}).flat(Infinity);
};

export default flatMapDeep;
