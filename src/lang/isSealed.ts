/**
 * Checks if an object is sealed.
 *
 * @since 1.0.0
 *
 * @param {Object|Array<any>} collection - The object or array to check.
 * @returns {boolean} - Returns `true` if the object is sealed, else `false`.
 *
 * @example
 * const obj = { a: 1, b: 2 };
 * console.log(Object.isSealed(obj)); // false
 *
 * Object.seal(obj);
 * console.log(Object.isSealed(obj)); // true
 *
 * const arr = [1, 2, 3];
 * console.log(Object.isSealed(arr)); // false
 *
 * Object.seal(arr);
 * console.log(Object.isSealed(arr)); // true
 *
 * console.log(isSealed(obj)); // true
 * console.log(isSealed(arr)); // true
 */
const isSealed = (collection: Object | Array<any>): boolean =>
	Object.isSealed(collection);
export default isSealed;
