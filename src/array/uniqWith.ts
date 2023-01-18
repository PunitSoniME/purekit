import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param comparator
 * @returns
 */
const uniqWith = <T>(
	array: T[],
	comparator: predicateType<T> = identity
): T[] => {
	return array.filter(
		(x, i, self) => i === self.findIndex(y => (comparator as Function)(x, y))
	);
};

export default uniqWith;
