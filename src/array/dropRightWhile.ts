import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

/**
 *
 * @param collection
 * @param predicate
 * @returns
 */
const dropRightWhile = <T>(
	collection: T[],
	predicate: predicateType<T>
): T[] => {
	const fn = createPredicate(predicate);

	for (let i = collection.length - 1; i >= 0; i--) {
		if (!(fn as any)(collection[i])) {
			return collection.slice(0, i + 1);
		}
	}

	return collection;
};

export default dropRightWhile;
