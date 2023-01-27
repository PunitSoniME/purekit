/**
 *
 * @param str
 * @param pattern
 * @returns
 */
const words = (str: string = '', pattern: RegExp | string = /\w+/g): any =>
	str.match(pattern);
export default words;
