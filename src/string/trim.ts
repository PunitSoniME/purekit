import trimEnd from './trimEnd';
import trimStart from './trimStart';

/**
 * Removes specified characters from the beginning and end of a string.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to trim.
 * @param {string} [characters=''] - The characters to remove from the string.
 *
 * @return {string} The trimmed string.
 *
 * @example
 *
 * // returns 'Hello, World!'
 * trim('  Hello, World!   ');
 *
 * // returns 'JavaScript is awesome'
 * trim('JavaScript is awesome', 'weojsacm');
 */
const trim = (str: string = '', characters: string = ''): string => {
	const startedTrimmed = trimStart(str, characters);
	return trimEnd(startedTrimmed, characters);
};

export default trim;
