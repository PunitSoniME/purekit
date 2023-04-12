import createPredicate from '../helpers/createPredicate';
import predicateType from './predicateType';
import identity from '../util/identity';

const baseLast = <T>(
	array: T[],
	predicate: predicateType<T> = identity,
	fromIndex: number = 0,
	toIndex: number = array.length - 1
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

export default baseLast;
