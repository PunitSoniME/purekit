/**
 *
 * @param str
 * @param length
 * @param chars
 * @returns
 */
const padStart = (str: string = '', length: number = 0, chars: string = ' ') =>
	str.padStart(length, chars);
export default padStart;
