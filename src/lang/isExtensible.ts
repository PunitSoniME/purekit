/**
 * Checks if the collection is extensible or not
 * @param collection The collection to check.
 * @returns Returns true if collection if extensible, else false.
 */
const isExtensible = (collection: Object | Array<any>): boolean =>
	Object.isExtensible(collection);
export default isExtensible;
