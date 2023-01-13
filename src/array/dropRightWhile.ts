import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param predicate
 * @returns
 */
const dropRightWhile = <T>(
	array: T[],
	predicate: predicateType<T> = identity
): T[] => {
	const fn = createPredicate(predicate);

	for (let i = array.length - 1; i >= 0; i--) {
		if (!(fn as any)(array[i])) {
			return array.slice(0, i + 1);
		}
	}

	return array;
};

export default dropRightWhile;
