/**
 *
 * @param str
 * @param length
 * @param chars
 * @returns
 */
const padEnd = (str: string = '', length: number = 0, chars: string = ' ') =>
	str.padEnd(length, chars);
export default padEnd;
