/**
 * Escapes any special characters in a string to be used as a regular expression.
 *
 * @since 1.0.0
 *
 * @param {string} str - The string to escape.
 *
 * @returns {string} - The escaped string.
 *
 * @example
 * const str = 'Hello, world. (can you escape me?)';
 *
 * const escapedStr = escapeRegExp(str); // 'Hello, world\\. \\(can you escape me\\?\\)'
 */
const escapeRegExp = (str: string): string =>
	str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export default escapeRegExp;
