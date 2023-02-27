import createPredicate from '../helpers/createPredicate';

/**
 * Checks if an object matches a source object, using a customizer function.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to check for a match.
 * @param {Object} source - The object to match against.
 *
 * @returns {boolean} - Returns true if the object matches the source object, else false.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': 3 };
 *
 * isMatch(object, { 'b': 2 }); // true
 * isMatch(object, { 'b': 1 }); // false
 */
const isMatch = (object: Object, source: Object): boolean => {
	const fn = createPredicate(source);
	return [object].some(s => (fn as any)(s));
};

export default isMatch;
