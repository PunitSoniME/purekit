/**
 * Converts a string to title case and removes special characters.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to convert to title case.
 *
 * @return {string} - The string converted to title case.
 *
 * @example
 *
 * upperCase('Hello_world');
 * // => 'HELLO WORLD'
 *
 * upperCase('life-is_beautiful');
 * // => 'LIFE IS BEAUTIFUL'
 */
const upperCase = (str: string = ''): string =>
	str
		.replace(/[-._\s]+/g, ' ')
		.replace(/[A-Z0-9]/, ' $&')
		.replace(/[-]{2,}/, '')
		.toUpperCase()
		.trim();

export default upperCase;
