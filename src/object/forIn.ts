import applyArrayFn from '../helpers/applyArrayFn';
import assignIn from './assignIn';

/**
 *
 * @param object
 * @param iteratee
 * @returns
 */
const forIn = (object: Object, iteratee: any): Object => {
	const collection = assignIn({}, object);

	return applyArrayFn({
		collection: collection,
		fnName: 'forEach',
		iteratee: iteratee,
	});
};
export default forIn;
