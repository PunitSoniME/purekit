import predicateType from '../helpers/predicateType';
import prepareObject, { prepareObjectTypes } from '../helpers/prepareObject';
import identity from '../util/identity';

/**
 * The opposite of `filter`, this method returns an array of all elements for which
 * the `predicate` function returns a falsy value.
 *
 * @since 1.0.0
 *
 * @template T - The type of the input array elements
 * @param {T[]} collection - The input collection
 * @param {Function} [predicate=identity] - The function invoked per iteration
 * @returns {any[]} - Returns the new filtered array
 *
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * reject(users, ({ active }) => active);
 * // => [{ 'user': 'fred', 'active': false }]
 */
const reject = <T>(
	collection: T[],
	predicate: predicateType<T> = identity
): any[] => {
	const { conditionFailedRecords } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.push,
		includeConditionFailRecord: true,
	});

	return Object.values(conditionFailedRecords).reduce(
		(accumulator: any, currentValue: any) => {
			return [...accumulator, ...currentValue];
		},
		[]
	) as any[];
};

export default reject;
