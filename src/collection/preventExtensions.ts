/**
 * This method prevents new properties from ever being added to an object/array
 *
 * @since 1.0.0
 *
 * @param {T[]} collection - The collection which should be made non-extensible.
 *
 * @returns {Array} - The collection being made non-extensible.
 *
 * @example
 *
 * let obj = { a: 1, b: 2 };
 * preventExtensions(obj);
 *
 * obj.b = 3;
 * console.log(obj);
 * //	=> { a: 1, b: 3 }
 *
 * obj.c = 100;
 * //	=> { a: 1, b: 3 }
 */
const preventExtensions = (collection: Object | any[]): Object | any[] =>
	Object.preventExtensions(collection);
export default preventExtensions;
