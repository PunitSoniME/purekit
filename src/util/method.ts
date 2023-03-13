import get from '../object/get';

/**
 * Creates a function that invokes the method at `path` of a given object.
 *
 * @since 1.0.0
 *
 * @param {string|Array} path - The path of the method to invoke.
 * @param {...*} args - The arguments to invoke the method with.
 *
 * @returns {Function} Returns the new method function.
 *
 * @example
 *
 * const users = [{ name: 'Alice', age: 32 }, { name: 'Bob', age: 42 }];
 * const getNames = method('name');
 * const names = users.map(getNames);
 * // returns ['Alice', 'Bob']
 */
const method =
	(path: string | any[], ...args: any): any =>
	(object: any) =>
		get(object, path)(args);
export default method;
