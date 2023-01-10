import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

/**
 *
 * @param object
 * @param predicate
 */
const pickBy = <T>(object: Object, predicate: predicateType<T>): Object => {
	const fn = createPredicate(predicate);
	let newObject: Object = {};
	Object.entries(object).forEach(([key, value]) => {
		if ((fn as any)(value)) {
			(newObject as any)[key] = value;
		}
	});
	return newObject;
};
export default pickBy;
