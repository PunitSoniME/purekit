/**
 * Converts a given value to an array.
 *
 * @since 1.0.0
 *
 * @param {any} value - The value to convert to an array.
 * @returns {any[]} - The resulting array.
 *
 * @example
 *
 * toArray('hello') // => ['h', 'e', 'l', 'l', 'o']
 * toArray([1, 2, 3]) // => [1, 2, 3]
 * toArray(new Set([1, 2, 3])) // => [1, 2, 3]
 * toArray({a: 1, b: 2}) // => [1, 2]
 * toArray(null) // => []
 */

const toArray = (value: any): any[] => {
	if (Array.isArray(value)) return value;
	if (value instanceof Map || value instanceof Set)
		return (value as any).values();
	if (value instanceof Object) return Object.values(value);
	if (typeof value === 'string') return value.split('');
	return [];
};
export default toArray;
