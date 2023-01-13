import identity from '../util/identity';

/**
 *
 * @param array1
 * @param array2
 * @param iteratee
 * @returns
 */
const differenceBy = <T>(
	array1: T[],
	array2: T[],
	iteratee: any = identity
): T[] => {
	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}
	return array1.filter(c => !array2.map(iteratee).includes(iteratee(c)));
};

export default differenceBy;
