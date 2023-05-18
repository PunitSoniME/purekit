/**
 * Creates a new object with the specified prototype and properties.
 * If the properties argument is not provided, an empty object with the given prototype is created.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} prototype - The prototype of the newly created object.
 * @param {T | null} [properties=null] - The properties of the newly created object.
 * @returns {T} - A new object with the specified prototype and properties.
 *
 * @example
 * const prototype = { a: 1 };
 *
 * const obj1 = create(prototype);
 * console.log(obj1);
 * // => {}

 * const obj2 = create(prototype, { b: 2 });
 * console.log(obj2);
 * // => { b: 2 }
 *
 * const obj3 = create(prototype, { a: 3, b: 4 });
 * console.log(obj3);
 * // => { a: 3, b: 4 }
 */
const create = <T>(prototype: T, properties: T | null = null): T => {
	if (properties === null)
		return Object.assign(Object.create(prototype as object));
	return Object.assign(Object.create(prototype as object), { ...properties });
};
export default create;
