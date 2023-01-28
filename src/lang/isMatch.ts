import createPredicate from '../helpers/createPredicate';

/**
 * Performs a partial deep comparison between object and source to determine if object contains equivalent property values.
 * @param object The object to inspect.
 * @param source The object of property values to match.
 * @returns Returns true if object is a match, else false.
 */
const isMatch = (object: Object, source: Object): boolean => {
	const fn = createPredicate(source);
	return [object].some(s => (fn as any)(s));
};

export default isMatch;
