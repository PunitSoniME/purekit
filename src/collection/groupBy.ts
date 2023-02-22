import predicateType from '../helpers/predicateType';
import prepareObject, { prepareObjectTypes } from '../helpers/prepareObject';
import identity from '../util/identity';

/**
 * Groups the elements of an array into an object based on a provided predicate.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} collection - The input collection.
 * @param {predicateType<T>} [predicate=identity] - The function invoked per iteration.
 * @returns {Object} - Returns the composed aggregate object.
 *
 * @example
 *
 * const users = [
 *   { name: 'Alice', age: 21 },
 *   { name: 'Bob', age: 25 },
 *   { name: 'Charlie', age: 30 },
 *   { name: 'David', age: 25 },
 *   { name: 'Eva', age: 21 }
 * ];
 *
 * groupBy(users, user => user.age);
 * // => {
 * //        '21': [
 * //          { name: 'Alice', age: 21 },
 * //          { name: 'Eva', age: 21 }
 * //        ],
 * //        '25': [
 * //          { name: 'Bob', age: 25 },
 * //          { name: 'David', age: 25 }
 * //        ],
 * //        '30': [{ name: 'Charlie', age: 30 }]
 * //      }
 */
const groupBy = <T>(
	collection: T[],
	predicate: predicateType<T> = identity
): Object => {
	const { result } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.push,
	});
	return result;
};

export default groupBy;
