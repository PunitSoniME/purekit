import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param object
 * @param iteratee
 * @returns
 */
const invertBy = <T>(
	object: Object,
	iteratee: predicateType<T> = identity
): Object => {
	const fn = createPredicate(iteratee);
	return Object.entries(object as Object).reduce((acc, [key, value]) => {
		const newKey: string = (fn as any)(value);
		const valueOfNewKey = (acc as any)[newKey];

		return {
			...acc,
			[newKey]: valueOfNewKey === undefined ? [key] : [...valueOfNewKey, key],
		};
	}, {});
};

export default invertBy;
