import predicateType from '../helpers/predicateType';
import prepareObject, { prepareObjectTypes } from '../helpers/prepareObject';
import identity from '../util/identity';

/**
 * Groups the elements in the array by a given criterion, and counts the number of elements in each group.
 *
 * @template T
 * @param {T[]} collection - The array to iterate over.
 * @param {Function} [predicate = identity] - The function invoked per iteration.
 * 
 * @returns {Object} - An object with keys representing the group and values representing the count of elements in that group.
 *
 * @example
 *
 * countBy([6.1, 4.2, 6.3], Math.floor) // => { '4': 1, '6': 2 }
 * countBy(['one', 'two', 'three'], 'length') // => { '3': 2, '5': 1 }
 * countBy(['one', 'two', 'three'], word => word[0]) // => { o: 2, t: 1 }
 */

const countBy = <T>(
	collection: T[],
	predicate: predicateType<T> = identity
): Object => {
	const { result } = prepareObject({
		collection: collection,
		predicate: predicate,
		operation: prepareObjectTypes.count,
	});
	return result;
};

export default countBy;
