/**
 *
 * @param array
 * @param depth
 * @returns
 */
const flattenDepth = <T>(array: T[], depth: number = 1): any[] =>
	array.flat(depth);

export default flattenDepth;
