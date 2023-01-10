// interface Concat {
// 	<T>(collection: T[], ...restCollection: T[]): T[];
// 	<T>(collection: T[], collection2: T | T[], ...restCollection: T[]): T[];
// 	<T>(collection: T[], collection2: T | T[], collection3: T | T[], ...restCollection: T[]): T[];
// }

/**
 *
 * @param collection
 * @param restCollection
 * @returns
 */
const concat = <T>(collection: T[], ...restCollection: any[]): T[] => {
	let newCollection: T[] = [];
	newCollection = newCollection.concat(collection);

	restCollection.forEach(c => {
		newCollection = newCollection.concat(c);
	});

	return [...newCollection];
};
export default concat;
