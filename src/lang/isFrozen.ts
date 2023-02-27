/**
 * Checks if an object or array is frozen using the built-in `Object.isFrozen()` method.
 *
 * @since 1.0.0
 *
 * @param {Object|Array} collection - The object or array to check if it's frozen.
 * @returns {boolean} - Returns `true` if the object or array is frozen, else `false`.
 *
 * @example
 *
 * const obj = {a: 1, b: 2};
 * Object.freeze(obj);
 *
 * console.log(isFrozen(obj)); // true
 *
 * const arr = [1, 2, 3];
 * Object.freeze(arr);
 *
 * console.log(isFrozen(arr)); // true
 *
 * const obj2 = {a: {b: 1}};
 *
 * console.log(isFrozen(obj2)); // false
 */

const isFrozen = (collection: Object | Array<any>): boolean =>
	Object.isFrozen(collection);
export default isFrozen;
