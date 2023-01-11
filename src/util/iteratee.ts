import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

/**
 *
 * @param predicate
 * @returns
 */
const iteratee = <T>(predicate: predicateType<T>): any =>
	createPredicate(predicate);
export default iteratee;
