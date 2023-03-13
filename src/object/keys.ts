/**
 * Returns an array of the own enumerable property names of the given object.
 *
 * @since 1.0.0
 *
 * @param {object} object - The object to retrieve the keys from.
 * @returns {Array} - An array of the object's keys.
 *
 * @example
 *
 * const object = { a: 1, b: 2, c: 3 };
 *
 * keys(object);
 * // => ['a', 'b', 'c']
 */
const keys = (object: any): any[] => Object.keys(object);
export default keys;
