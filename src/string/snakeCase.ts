//  @ts-nocheck
/**
 *
 * @param str s
 * @returns
 */
const snakeCase = (str: string = ''): string =>
	str
		.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
		.map(s => s.toLowerCase())
		.join('_');
export default snakeCase;
