/**
 * Converts the first character of a string to uppercase.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to convert.
 *
 * @return {string} - The string with the first character converted to uppercase.
 *
 * @example
 *
 * upperFirst('hello, World!');
 * // => 'Hello, World!'
 *
 * upperFirst('the quick brown fox jumps over the lazy dog.');
 * // => 'The quick brown fox jumps over the lazy dog.'
 */
const upperFirst = (str: string = ''): string =>
	str.charAt(0).toUpperCase() + str.slice(1);
export default upperFirst;
