import assignInWith from './assignInWith';

/**
 * This method is like `assignIn` except that it accepts customizer which is
 * invoked to produce the assigned values. If customizer returns undefined,
 * assignment is handled by the method instead. The customizer is invoked with
 * five arguments: (objValue, srcValue, key, object, source).
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} object - The destination object.
 * @param {...any} args - The source objects.
 * @param {Function} customizer - The function to customize assigned values.
 * @returns {T} Returns `object`.
 *
 * @example
 *
 * const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
 * const other = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
 *
 * function customizer(objValue, srcValue) {
 *   if (Array.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * const result = extendWith(object, other, customizer);
 * console.log(result);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
const extendWith = assignInWith;
export default extendWith;
