/**
 *
 * @param array
 * @param restCollection
 * @returns
 */
const union = <T>(array: T[], ...restCollection: T[][]): T[] => [
	...new Set(array.concat(...restCollection)),
];
export default union;
