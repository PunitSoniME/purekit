/**
 * Returns an array of all the function names in the given object.
 *
 * @param {Object} object - The object to search for functions.
 * @returns {Array} An array of all the function names in the object.
 * @since 1.0.0
 *
 * @example
 *
 * const obj = {
 *   add: function(a, b) {
 *     return a + b;
 *   },
 *   subtract: function(a, b) {
 *     return a - b;
 *   },
 *   name: 'John Doe'
 * };
 *
 * const functionNames = functions(obj);
 * // functionNames = ['add', 'subtract']
 */

const functions = (object: Object): any[] =>
	Object.keys(object).filter(
		(key: any) => typeof (object as any)[key] === 'function'
	) ?? [];
export default functions;
