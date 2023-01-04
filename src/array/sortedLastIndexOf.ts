/**
 *
 * @param collection
 * @param value
 * @returns
 */
const sortedLastIndexOf = <T>(collection: T[], value: T): number =>
	[...collection].sort().lastIndexOf(value);
export default sortedLastIndexOf;
