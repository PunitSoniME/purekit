import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from './identity';

/**
 * Creates a function that can be used to iterate over a collection.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {Function} [predicate = identity] - The predicate function to convert into an iteratee.
 *
 * @returns {Function} - Returns the new iteratee function.
 *
 * @example
 *
 * const users = [{ name: 'Alice', age: 32 }, { name: 'Bob', age: 42 }];
 * const sortByAge = users.sort(iteratee(user => user.age));
 * // => [{ name: 'Alice', age: 32 }, { name: 'Bob', age: 42 }]
 */
const iteratee = <T>(predicate: predicateType<T> = identity): any =>
	createPredicate(predicate);
export default iteratee;
