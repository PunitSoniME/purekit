/**
 * Checks if the collection is frozen or not
 * @param collection The collection to check.
 * @returns Returns true if collection if freezed, else false.
 */
const isFrozen = (collection: Object | Array<any>): boolean =>
	Object.isFrozen(collection);
export default isFrozen;
