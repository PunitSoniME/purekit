import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates an object with the same values as the original, but with new keys generated
 * by applying an iteratee function to each key in the original object.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to map.
 * @param {Function} [iteratee = identity] - The mapping function.
 * @returns {Object} - The new object with mapped keys.
 *
 * @example
 *
 * const users = {
 *   john: { age: 23 },
 *   jane: { age: 31 },
 *   jack: { age: 27 }
 * };
 *
 * const uppercaseKeys = mapKeys(users, (value, key) => key.toUpperCase());
 *
 * console.log(uppercaseKeys);
 * // => { JOHN: { age: 23 }, JANE: { age: 31 }, JACK: { age: 27 } }
 */
const mapKeys = (object: any, iteratee: predicateType = identity): Object => {
	const fn = createPredicate(iteratee);

	return Object.entries(object).reduce(
		(acc, [key, value]) => ({
			...acc,
			[(fn as any)(value, key)]: value,
		}),
		{}
	);
};
export default mapKeys;
