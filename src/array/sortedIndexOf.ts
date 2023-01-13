/**
 *
 * @param array
 * @param value
 * @returns
 */
const sortedIndexOf = <T>(array: T[], value: T): number =>
	[...array].sort().indexOf(value);
export default sortedIndexOf;
