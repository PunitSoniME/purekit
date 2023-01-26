import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param object
 * @param iteratee
 * @returns
 */
const mapValues = <T>(object: any, iteratee: predicateType<T> = identity): Object => {
	const fn = createPredicate(iteratee);

	return Object.entries(object).reduce(
		(acc, [key, value]) => ({
			...acc,
			[key]: (fn as any)(value),
		}),
		{}
	);
};
export default mapValues;
