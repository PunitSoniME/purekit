import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param iteratee
 * @returns
 */
const uniqBy = <T>(array: T[], iteratee: predicateType<T> = identity): T[] => {
	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return array.filter(
		(x, i, self) =>
			i === self.findIndex(y => (iteratee as any)(x) === (iteratee as any)(y))
	);
};

export default uniqBy;
