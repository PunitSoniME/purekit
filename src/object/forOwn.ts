import applyArrayFn from '../helpers/applyArrayFn';

/**
 *
 * @param object
 * @param iteratee
 * @returns
 */
const forOwn = (object: Object, iteratee: any): Object => {
	return applyArrayFn({
		collection: object,
		fnName: 'forEach',
		iteratee: iteratee,
	});
};
export default forOwn;
