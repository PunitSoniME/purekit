/**
 *
 * @param value The value to check
 * @returns true if passed value is a empty or not
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
