import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param predicate
 * @returns
 */
const takeRightWhile = <T>(
	array: T[],
	predicate: predicateType<T> = identity
): T[] => {
	if (array.length === 0) return array;

	const fn = createPredicate(predicate);
	let arrayToReturn: T[] = [];

	for (let i = array.length - 1; i >= 0; i--) {
		if ((fn as any)(array[i])) {
			arrayToReturn.push(array[i]);
		} else {
			return arrayToReturn.reverse();
		}
	}

	return [];
};
export default takeRightWhile;
