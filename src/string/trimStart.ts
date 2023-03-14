/**
 * Removes specified characters from the beginning of a string.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to trim.
 * @param {string} [characters=''] - The characters to remove from the beginning of the string.
 *
 * @return {string} The trimmed string.
 *
 * @example
 *
 * // returns 'Hello, World   '
 * trimStart('   Hello, World   ');
 *
 * // returns 'Hello, World'
 * trimStart('!!!Hello, World', '!');
 */
const trimStart = (str: string = '', characters: string = ''): string => {
	if (characters.trim() === '') return str.trimStart();

	return str.replace(new RegExp('^[' + characters + ']+'), '');
};

export default trimStart;
