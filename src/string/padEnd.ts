/**
 * Pads a string with additional characters at the end to reach a specified length.
 *
 * @since 1.0.0
 *
 * @param {string} str - The string to pad.
 * @param {number} length - The target length of the string.
 * @param {string} chars - The characters to use for padding. Defaults to a space.
 *
 * @returns {string} - The padded string.
 *
 * @example
 *
 * padEnd('hello', 8); // 'hello   '
 * padEnd('hello', 8, '-'); // 'hello---'
 */
const padEnd = (str: string = '', length: number = 0, chars: string = ' ') =>
	str.padEnd(length, chars);
export default padEnd;
