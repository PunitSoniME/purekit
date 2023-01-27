/**
 * A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
 * @param collection The collection to freeze.
 * @returns The collection that was passed to the function.
 *
 * @example
 *
 * let obj = { a: 1, b: 2 };
 * freeze(obj);
 *
 * obj.b = 3;
 * console.log(obj);
 * //	=> { a: 1, b: 2 }
 */
const freeze = (collection: Object | Array<any>): Object | Array<any> =>
	Object.freeze(collection);
export default freeze;
