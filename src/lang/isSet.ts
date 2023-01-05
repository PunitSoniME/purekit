/**
 * Checks if value is classified as a set object.
 * @param value The value to check
 * @returns Returns true if value is a set, else false
 */
const isSet = (value: any): boolean =>
	value instanceof Set || value.toString() === '[object Set]';
export default isSet;
