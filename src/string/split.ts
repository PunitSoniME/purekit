/**
 *
 * @param str
 * @param separator
 * @param limit
 * @returns
 */
const split = (
	str: string = '',
	separator: string | RegExp,
	limit: number
): string[] => str.split(separator, limit);
export default split;
