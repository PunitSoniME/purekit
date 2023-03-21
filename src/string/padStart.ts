/**
 * Pads the start of a string with the given characters until it reaches the specified length.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The input string to pad.
 * @param {number} [length=0] - The length to pad the string to.
 * @param {string} [chars=' '] - The characters to use for padding.
 *
 * @returns {string} - The padded string.
 *
 * @example
 *
 * padStart('hello', 10); // => '     hello'
 * padStart('world', 10, '*'); // => '*****world'
 */
const padStart = (str: string = '', length: number = 0, chars: string = ' ') =>
	str.padStart(length, chars);
export default padStart;
