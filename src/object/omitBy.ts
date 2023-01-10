import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

/**
 *
 * @param object
 * @param predicate
 */
const omitBy = <T>(object: Object, predicate: predicateType<T>): any => {
	const fn = createPredicate(predicate);
	Object.entries(object).forEach(
		([key, value]) => (fn as any)(value) && delete (object as any)[key]
	);
	return object;
};
export default omitBy;
