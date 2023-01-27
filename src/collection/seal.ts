/**
 * A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable.
 * @param collection The collection which should be sealed.
 * @returns The collection being sealed.
 *
 * @example
 *
 * let obj = { a: 1, b: 2 };
 * seal(obj);
 *
 * obj.b = 3;
 * console.log(obj);
 * //	=> { a: 1, b: 3 }
 *
 * obj.c = 100;
 * //	=> { a: 1, b: 3 }
 */
const seal = (collection: Object | any[]): Object | any[] =>
	Object.seal(collection);
export default seal;
