import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

/**
 *
 * @param object
 * @param iteratee
 * @returns
 */
const mapKeys = <T>(object: any, iteratee: predicateType<T>): Object => {
	const fn = createPredicate(iteratee);

	return Object.entries(object).reduce(
		(acc, [key, value]) => ({
			...acc,
			[(fn as any)(value, key)]: value,
		}),
		{}
	);
};
export default mapKeys;
