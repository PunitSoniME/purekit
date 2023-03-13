/**
 * Converts a string to lowercase with spaces between words.
 * Replaces hyphens, dots, and underscores with spaces.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to convert.
 * @returns {string} - The converted string.
 *
 * @example
 * lowerCase('fooBar123') // 'foo bar 123'
 * lowerCase('FOO-BAR.BAZ') // 'foo bar baz'
 */
const lowerCase = (str: string = ''): string =>
	str
		.replace(/[-._\s]+/g, ' ')
		.replace(/[A-Z0-9]/, ' $&')
		.replace(/[-]{2,}/, '')
		.toLowerCase()
		.trim();

export default lowerCase;
