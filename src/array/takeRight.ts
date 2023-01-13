/**
 *
 * @param array
 * @param length
 * @returns
 */
const takeRight = <T>(array: T[], length: number = 1): T[] =>
	[...array].splice(-length, length);
export default takeRight;
