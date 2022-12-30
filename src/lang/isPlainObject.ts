/**
 * Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.
 * @param value The value to check
 * @returns Returns true if value is a plain object, else false.
 */
const isPlainObject = (value: any): boolean =>
	//  value?.constructor === Object;
	!!value &&
	typeof value === 'object' &&
	(value.__proto__ === null || value.__proto__ === Object.prototype);

export default isPlainObject;
