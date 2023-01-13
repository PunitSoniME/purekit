/**
 *
 * @param array
 * @param value
 * @returns
 */
const sortedLastIndexOf = <T>(array: T[], value: T): number =>
	[...array].sort().lastIndexOf(value);
export default sortedLastIndexOf;
