/**
 * Checks if a string starts with a given target string.
 * 
 * @param {string} [str=''] - The string to search in.
 * @param {string} [target=''] - The target string to search for.
 * @param {number} [position=0] - The position in the string at which to begin searching.
 * 
 * @returns {boolean} `true` if the string starts with the target string, `false` otherwise.
 * 
 * @example
 * 
 * startsWith('hello world', 'hello'); // true
 * startsWith('hello world', 'world'); // false
 * startsWith('hello world', 'world', 6); // true
 */
const startsWith = (
	str: string = '',
	target: string = '',
	position: number = 0
): boolean => str.startsWith(target, position);

export default startsWith;
