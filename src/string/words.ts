/**
 * Splits a string into an array of words based on a given pattern.
 *
 * @since 1.0.0
 *
 * @param {string} [str=''] - The string to split into words.
 * @param {RegExp|string} [pattern=/\w+/g] - The pattern to match words.
 *
 * @return {Array<string>} An array of words.
 *
 * @example
 *
 * // returns ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
 * words('The quick brown fox jumps over the lazy dog');
 *
 * // returns ['apple', 'banana', 'cherry']
 * words('apple, banana, cherry', /[^, ]+/g);
 */
const words = (str: string = '', pattern: RegExp | string = /\w+/g): any =>
	str.match(pattern);
export default words;
