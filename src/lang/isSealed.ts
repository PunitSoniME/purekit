/**
 * Checks if the collection is sealed or not
 * @param collection The collection to check.
 * @returns Returns true if collection if sealed, else false.
 */
const isSealed = (collection: Object | Array<any>): boolean =>
	Object.isSealed(collection);
export default isSealed;
