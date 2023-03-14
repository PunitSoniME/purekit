/**
 * Pads a string with a specified character to a specified length.
 *
 * @since 1.0.0
 *
 * @param {string} str - The string to pad.
 * @param {number} length - The length to pad the string to.
 * @param {string} [characters=' '] - The character to use for padding (default is space).
 *
 * @returns {string} - The padded string.
 *
 * @example
 *
 * pad('hello', 10); // '  hello   '
 * pad('hello', 10, '-'); // '--hello---'
 */
const pad = (str: string, length: number, characters: string = ' ') => {
	const prePad = Math.floor((length - str.length) / 2) + str.length;
	return str.padStart(prePad, characters).padEnd(length, characters);
};

export default pad;
