/**
 * Splits a string into an array of substrings based on a specified separator.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to be split.
 * @param {string | RegExp} separator - Specifies the character(s) to use for separating the string.
 * @param {number} limit - A non-negative integer specifying the number of splits.
 *
 * @returns {string[]} - An array of substrings.
 *
 * @example
 * split('a,b,c,d', ',', 2); // returns ['a', 'b']
 */
const split = (
	str: string = '',
	separator: string | RegExp,
	limit: number
): string[] => str.split(separator, limit);
export default split;
