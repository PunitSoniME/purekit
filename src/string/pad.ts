/**
 *
 * @param str
 * @param length
 * @param characters
 * @returns
 */
const pad = (str: string, length: number, characters: string = ' ') => {
	const prePad = Math.floor((length - str.length) / 2) + str.length;
	return str.padStart(prePad, characters).padEnd(length, characters);
};

export default pad;
