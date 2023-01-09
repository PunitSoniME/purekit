import isNil from './isNil';

/**
 * Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
 * @param value The value to check
 * @returns Returns true if value is an object, else false.
 */
const isObject = (value: any): boolean =>
	!isNil(value) && value instanceof Object;
export default isObject;
