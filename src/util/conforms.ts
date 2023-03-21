import conformsTo from '../lang/conformsTo';

/**
 * Creates a function that checks if an object conforms to the specified object properties and values.
 *
 * @since 1.0.0
 *
 * @param {Object} object - The object of property predicates.
 *
 * @return {Function} - The new function.
 *
 * @example
 *
 * const func = conforms({x: x => x > 5, y: y => y < 10});
 *
 * func({x: 10, y: 5});
 * // => true
 *
 * func({x: 2, y: 15});
 * // => false
 */
const conforms =
	(object: Object): any =>
	(obj: any) =>
		conformsTo(obj, object);
export default conforms;
