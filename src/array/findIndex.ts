import applyArrayFn from '../helpers/applyArrayFn';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param predicate
 * @param fromIndex
 * @returns
 */
const findIndex = <T>(
	array: T,
	predicate: predicateType<T> = identity,
	fromIndex: number = 0
): number => {
	return applyArrayFn({
		collection: array,
		fnName: 'findIndex',
		iteratee: predicate,
		fromIndex: fromIndex,
	});
};

export default findIndex;
