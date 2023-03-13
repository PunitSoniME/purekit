import predicateType from '../helpers/predicateType';
import prepareObject, { prepareObjectTypes } from '../helpers/prepareObject';
import identity from '../util/identity';

/**
 * Splits collection into two arrays: one for values that pass a predicate, and one for values that do not pass.
 *
 * @since 1.0.0
 *
 * @template T - The type of the elements in the collection.
 *
 * @param {T[]} collection - The collection to partition.
 * @param {predicateType<T>} [predicate=identity] - The function invoked per iteration to determine if an element passes the predicate.
 *
 * @returns {Array} - Returns the new array of two arrays, where the first array contains the elements that passed the predicate, and the second contains the elements that failed the predicate.
 *
 * @example
 *
 * const users = [
 *   { user: 'barney', age: 36, active: false },
 *   { user: 'fred', age: 40, active: true },
 *   { user: 'pebbles', age: 1, active: false }
 * ];
 *
 * const [activeUsers, inactiveUsers] = partition(users, ({ active }) => active);
 *
 * console.log(activeUsers); // [{ user: 'fred', age: 40, active: true }]
 *
 * console.log(inactiveUsers);
 * // [
 * //   { user: 'barney', age: 36, active: false },
 * //   { user: 'pebbles', age: 1, active: false }
 * // ]
 */
const partition = <T>(
	collection: T[],
	predicate: predicateType<T> = identity
): any[] => {
	const { result, conditionFailedRecords } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.push,
		includeConditionFailRecord: true,
	});

	let dataToReturn = Object.values(result).reduce(
		(accumulator: any, currentValue: any) => {
			return [...accumulator, currentValue];
		},
		[]
	) as any[];

	return Object.values(conditionFailedRecords).reduce(
		(accumulator: any, currentValue: any) => {
			return [...accumulator, currentValue];
		},
		dataToReturn
	) as any[];
};

export default partition;
