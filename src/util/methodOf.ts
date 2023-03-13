import get from '../object/get';

/**
 * Creates a function that invokes the method at `path` of a given object.
 *
 * @since 1.0.0
 *
 * @param {Object} object The object to query.
 * @returns {Function} - Returns the new invoker function.
 *
 * @example
 *
 * const obj = {
 *   foo: {
 *     bar: (a, b) => a + b
 *   }
 * };
 * const barMethod = methodOf(obj)(['foo', 'bar']);
 *
 * console.log(barMethod(1, 2)); // Output: 3
 */
const methodOf =
	(object: any, ...args: any): any =>
	(path: string | any[]) =>
		get(object, path)(args);
export default methodOf;
