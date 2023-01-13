import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param predicate
 * @returns
 */
const takeWhile = <T>(
	array: T[],
	predicate: predicateType<T> = identity
): T[] => {
	if (array.length === 0) return array;

	const fn = createPredicate(predicate);
	let collectionToReturn: T[] = [];

	for (let i = 0; i < array.length; i++) {
		if ((fn as any)(array[i])) {
			collectionToReturn.push(array[i]);
		} else {
			return collectionToReturn;
		}
	}

	return [];
};
export default takeWhile;
