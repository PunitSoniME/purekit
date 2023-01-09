/**
 * Checks if value is classified as a Function object.
 * @param value The value to check
 * @returns Returns true if value is a function, else false.
 */
const isFunction = (value: any): boolean =>
	value instanceof Function && typeof value === 'function';
export default isFunction;
