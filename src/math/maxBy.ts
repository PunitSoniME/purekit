import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

/**
 * Returns the maximum value of a collection based on an iteratee function. If multiple
 * objects in the collection have the same maximum iteratee value, the first one found
 * will be returned.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {Array<T>} collection - The collection to iterate over.
 * @param {Function} iteratee - The iteratee to determine the max value.
 * @returns {T|undefined} - Returns the maximum value or undefined if the collection is empty.
 * @example
 *
 * const users = [
 *   { name: 'Alice', age: 25 },
 *   { name: 'Bob', age: 30 },
 *   { name: 'Charlie', age: 20 }
 * ];
 *
 * const oldestUser = maxBy(users, (user) => user.age);
 * console.log(oldestUser); // { name: 'Bob', age: 30 }
 */
const maxBy = <T>(collection: T[], iteratee: predicateType<T>): {} => {
	const fn = createPredicate(iteratee);
	return collection.reduce((a: any, b: any) => {
		return (fn as any)(a) >= (fn as any)(b) ? a : b;
	}, {});
};

export default maxBy;
