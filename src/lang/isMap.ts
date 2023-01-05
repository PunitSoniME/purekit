/**
 * Checks if value is classified as a Map object.
 * @param value The value to check
 * @returns Returns true if value is a map, else false
 */
const isMap = (value: any): boolean =>
	value instanceof Map || value.toString() === '[object Map]';
export default isMap;
