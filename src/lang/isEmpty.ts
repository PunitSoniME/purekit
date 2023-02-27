/**
 * Determines whether the given value is empty or not.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is empty, `false` otherwise.
 *
 * @example
 * isEmpty(null); // returns true
 * isEmpty(undefined); // returns true
 * isEmpty(0); // returns true
 * isEmpty(''); // returns true
 * isEmpty([]); // returns true
 * isEmpty({}); // returns true
 * isEmpty(new Set()); // returns true
 * isEmpty(new Map()); // returns true
 * isEmpty({ a: 1 }); // returns false
 * isEmpty('hello'); // returns false
 * isEmpty([1, 2, 3]); // returns false
 * isEmpty(new Set([1, 2, 3])); // returns false
 * isEmpty(new Map([['a', 1]])); // returns false
 */
const isEmpty = (value: any): boolean => {
	if (
		value === null ||
		value === undefined ||
		typeof value === 'number' ||
		typeof value === 'boolean'
	)
		return true;
	if (Array.isArray(value)) return value.length === 0;
	if (typeof value === 'object') return Object.keys(value).length === 0;
	if (value instanceof Set || value instanceof Map)
		return (value as any).length > 0;
	return false;
};
export default isEmpty;
