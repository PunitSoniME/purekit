import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

const findLastIndex = <T>(
	collection: T[],
	predicate: predicateType<T> = (x) => !!x,
	fromIndex = 0
): number => {
	const fn = createPredicate(predicate);

	if (fn === undefined) return collection.lastIndexOf(predicate as T);

	for (let i = collection.length - 1; i >= fromIndex; i--) {
		if ((fn as any)(collection[i])) {
			return i;
		}
	}
	return -1;
};

export default findLastIndex;
