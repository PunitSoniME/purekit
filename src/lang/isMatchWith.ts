/**
 * Checks if an object has a value matching the key-value pairs of another object using a customizer function.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object to inspect.
 * @param {Object} source - The object of property values to match.
 * @param {Function} customizer - The function to customize value comparisons.
 *
 * @returns {boolean} - Returns `true` if `object` has matching key-value pairs from `source`, else `false`.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': 3 };
 * const source = { 'a': 1, 'b': 2 };
 *
 * function customizer(objValue, srcValue, key, object, source) {
 *     return objValue === srcValue;
 * }
 *
 * isMatchWith(object, source, customizer); // returns true
 */
const isMatchWith = (
	object: Object,
	source: Object,
	customizer: Function
): boolean => {
	const keys: any[] = Object.keys(object);

	for (let i = 0; i < keys.length; i++) {
		if (
			!customizer(
				(object as any)[keys[i]],
				(object as any)[keys[i]],
				keys[i],
				object,
				source
			)
		) {
			return false;
		}
	}
	return true;
};

export default isMatchWith;
