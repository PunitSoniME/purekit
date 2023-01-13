import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param predicate
 * @returns
 */
const dropWhile = <T>(
	array: T[],
	predicate: predicateType<T> = identity
): T[] => {
	const fn = createPredicate(predicate);

	for (let i = 0; i < array.length; i++) {
		if (!(fn as any)(array[i])) {
			return array.slice(i);
		}
	}

	return array;
};

export default dropWhile;
