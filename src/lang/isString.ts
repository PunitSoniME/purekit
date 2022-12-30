/**
 * Checks if value is classified as a String primitive or object.
 * @param value The value to check
 * @returns Returns true if value is a string, else false
 */
const isString = (value: any): boolean => typeof value === 'string';
export default isString;
