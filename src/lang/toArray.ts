/**
 * Converts value to an array.
 * @param value The value to convert
 * @returns Returns the converted array.
 */
const toArray = (value: any): any[] => {
	if (Array.isArray(value)) return value;
	if (value instanceof Map || value instanceof Set || typeof value === 'object')
		return (value as any).values();
	if (typeof value === 'string') return value.split('');
	return [];
};
export default toArray;
