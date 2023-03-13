import getRandomElementFromCollection from '../helpers/getRandomElement';

/**
 * Returns a random element from a collection
 *
 * @since 1.0.0
 *
 * @param {Array|Object} collection The collection to sample from
 * @returns {*} - Returns the random element
 *
 * @example
 *
 * sample([1, 2, 3, 4, 5]) // returns a random number from the array
 *
 * sample({ a: 1, b: 2, c: 3 }) // returns a random value from the object
 *
 */
const sample = <T>(collection: T): any => {
	if (typeof collection === 'object')
		return Object.values(getRandomElementFromCollection(collection).element)[0];

	return getRandomElementFromCollection(collection as any[]).element;
};
export default sample;
