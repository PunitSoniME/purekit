import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 * Creates an object composed of keys generated from the results of running each element of object thru `iteratee`.
 * The corresponding value of each key is an array of original keys responsible for generating the key.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to invert.
 * @param {Function} [iteratee = identity] - The function invoked per iteration.
 * @returns The new inverted object.
 *
 * @example
 * const object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * invertBy(object);
 * // => { '1': ['a', 'c'], '2': ['b'] }
 *
 * invertBy(object, (value) => `group_${value}`);
 * // => { 'group_1': ['a', 'c'], 'group_2': ['b'] }
 */
const invertBy = (
	object: Object,
	iteratee: predicateType = identity
): Object => {
	const fn = createPredicate(iteratee);
	return Object.entries(object as Object).reduce((acc, [key, value]) => {
		const newKey: string = (fn as any)(value);
		const valueOfNewKey = (acc as any)[newKey];

		return {
			...acc,
			[newKey]: valueOfNewKey === undefined ? [key] : [...valueOfNewKey, key],
		};
	}, {});
};

export default invertBy;
