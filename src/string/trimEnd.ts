/**
 * Removes specified characters from the end of a string.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to trim.
 * @param {string} [characters=''] - The characters to remove from the end of the string.
 *
 * @return {string} The trimmed string.
 *
 * @example
 *
 * // returns 'Hello, World'
 * trimEnd('Hello, World   ');
 *
 * // returns 'Hello, World'
 * trimEnd('Hello, World!!!', '!');
 */
const trimEnd = (str: string = '', characters: string = ''): string => {
	if (characters.trim() === '') return str.trimEnd();

	return str.replace(new RegExp('[' + characters + ']+$'), '');
};

export default trimEnd;
