import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param predicate
 * @param fromIndex
 * @param toIndex
 * @returns
 */
const findLastIndex = <T>(
	array: T[],
	predicate: predicateType<T> = identity,
	fromIndex = 0,
	toIndex = array.length - 1
): number => {
	const fn = createPredicate(predicate);

	if (fn === undefined) return array.lastIndexOf(predicate as T);

	for (let i = toIndex; i >= fromIndex; i--) {
		if ((fn as any)(array[i])) {
			return i;
		}
	}
	return -1;
};

export default findLastIndex;
