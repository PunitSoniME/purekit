/**
 *
 * @param str
 * @returns
 */
const upperCase = (str: string = ''): string =>
	str
		.replace(/[-._\s]+/g, ' ')
		.replace(/[A-Z0-9]/, ' $&')
		.replace(/[-]{2,}/, '')
		.toUpperCase()
		.trim();

export default upperCase;
