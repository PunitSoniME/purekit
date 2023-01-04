/**
 *
 * @param collection
 * @param value
 * @returns
 */
const sortedIndexOf = <T>(collection: T[], value: T): number =>
	[...collection].sort().indexOf(value);
export default sortedIndexOf;
