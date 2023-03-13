/**
 * Replaces matches in a string with a replacement string or RegExp.
 *
 * @since 1.0.0
 *
 * @param {string} str - The string to modify.
 * @param {string|RegExp} pattern - The pattern to search for in the string.
 * @param {string|RegExp} replacement - The replacement string or RegExp.
 * @returns {string} The modified string.
 *
 * @example
 *
 * replace('Hello, world!', 'world', 'John'); // 'Hello, John!'
 */
const replace = (
	str: string = '',
	pattern: string | RegExp,
	replacement: string | RegExp
): string => str.replace(pattern, replacement as any);
export default replace;
