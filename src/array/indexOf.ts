/**
 *
 * @param array
 * @param value
 * @param startIndex
 * @returns
 */
const indexOf = <T>(array: T[], value: T, startIndex: number = 0): number =>
	array.indexOf(value, startIndex);

export default indexOf;
