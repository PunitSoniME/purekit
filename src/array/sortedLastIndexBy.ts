import baseSortedLastIndex from '../helpers/baseSortedLastIndex';
import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param value
 * @param predicate
 * @returns
 */
const sortedLastIndexBy = <T>(
	array: T[],
	value: T,
	iteratee: predicateType<T> = identity
): number => {
	const fn = createPredicate(iteratee);
	return baseSortedLastIndex(array, value, fn);
};

export default sortedLastIndexBy;
