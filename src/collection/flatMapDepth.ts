import applyArrayFn from '../helpers/applyArrayFn';

const flatMapDepth = <T>(
	collection: T,
	iteratee: any,
	depth: number = 1
): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'map',
		iteratee: iteratee,
	}).flat(depth);
};

export default flatMapDepth;
