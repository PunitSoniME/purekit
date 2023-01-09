import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

const findLastIndex = <T>(
	collection: T[],
	predicate: predicateType<T>,
	fromIndex = 0,
	toIndex = collection.length - 1
): number => {
	const fn = createPredicate(predicate);

	if (fn === undefined) return collection.lastIndexOf(predicate as T);

	for (let i = toIndex; i >= fromIndex; i--) {
		if ((fn as any)(collection[i])) {
			return i;
		}
	}
	return -1;
};

export default findLastIndex;
