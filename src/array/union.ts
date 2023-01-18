/**
 *
 * @param array
 * @param restArray
 * @returns
 */
const union = <T>(array: T[], ...restArray: T[][]): T[] => [
	...new Set(array.concat(...restArray)),
];
export default union;
