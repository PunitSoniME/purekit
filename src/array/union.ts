/**
 *
 * @param collection
 * @returns
 */
const union = <T>(...collection: T[][]): T[] => {
	let newSet = new Set<T>();
	collection.forEach((c: T[]) => {
		c.forEach(cc => newSet.add(cc));
	});
	return [...newSet];
};
export default union;
