/**
 *
 * @param collection
 * @param restCollection
 * @returns
 */
const union = <T>(collection: T[], ...restCollection: T[][]): T[] => [
	...new Set(collection.concat(...restCollection)),
];
export default union;
