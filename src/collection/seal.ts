/**
 * Seals an object or array, preventing new properties from being added to it and marking all existing properties as non-configurable.
 *
 * @since 1.0.0
 *
 * @param {Object|any[]} collection - The collection to be sealed.
 *
 * @returns {Object|any[]} - The sealed collection.
 *
 * @example
 *
 * const obj = { a: 1, b: 2 };
 * const sealedObj = seal(obj);
 * sealedObj.a = 3; // Cannot modify property 'a' of a sealed object.
 * sealedObj.c = 4; // Cannot add new property 'c' to a sealed object.
 * console.log(sealedObj);
 * // => { a: 1, b: 2 }
 *
 * const arr = [1, 2, 3];
 * const sealedArr = seal(arr);
 * sealedArr.push(4); // Cannot add new elements to a sealed array.
 * console.log(sealedArr);
 * // => [1, 2, 3]
 */
const seal = (collection: Object | any[]): Object | any[] =>
	Object.seal(collection);
export default seal;
