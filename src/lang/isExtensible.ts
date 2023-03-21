/**
 * Checks if an object is extensible (whether it can have new properties added to it or not).
 *
 * @since 1.0.0
 *
 * @param {Object|Array} collection - The collection to check for extensibility.
 *
 * @returns {boolean} - Returns `true` if the collection is extensible, else `false`.
 *
 * @example
 *
 * const obj = { a: 1 };
 * const arr = [1, 2, 3];
 *
 * Object.preventExtensions(obj);
 *
 * isExtensible(obj); // => false
 * isExtensible(arr); // => true
 */
const isExtensible = (collection: Object | Array<any>): boolean =>
	Object.isExtensible(collection);
export default isExtensible;
