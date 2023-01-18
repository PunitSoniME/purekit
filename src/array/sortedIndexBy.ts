import baseSortedIndex from '../helpers/baseSortedIndex';
import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param value
 * @param iteratee
 * @returns
 */
const sortedIndexBy = <T>(
	array: T[],
	value: T,
	iteratee: predicateType<T> = identity
): number => {
	const fn = createPredicate(iteratee);
	return baseSortedIndex(array, value, fn);
};

export default sortedIndexBy;
