/**
 * Checks if a value is a plain object, i.e., an object created by the Object constructor
 * or one with a [[Prototype]] of `null`.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if `value` is a plain object, else `false`.
 *
 * @example
 *
 * isPlainObject({}) // true
 * isPlainObject({ foo: 'bar' }) // true
 * isPlainObject(Object.create(null)) // true
 * isPlainObject(new Object()) // true
 * isPlainObject(new Date()) // false
 * isPlainObject(Math) // false
 * isPlainObject(/regexp/) // false
 * isPlainObject(null) // false
 * isPlainObject(123) // false
 * isPlainObject('abc') // false
 * isPlainObject(['a', 'b', 'c']) // false
 * isPlainObject(function() {}) // false
 *
 */
const isPlainObject = (value: any): boolean =>
	//  value?.constructor === Object;
	!!value &&
	typeof value === 'object' &&
	(value.__proto__ === null || value.__proto__ === Object.prototype);

export default isPlainObject;
