/**
 *
 * @param str
 * @param pattern
 * @param replacement
 * @returns
 */
const replace = (
	str: string = '',
	pattern: string | RegExp,
	replacement: string | RegExp
): string => str.replace(pattern, replacement as any);
export default replace;
